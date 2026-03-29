'use client';

import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

export default function EditorPage() {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!editorRef.current || initializedRef.current) return;

    initializedRef.current = true;

    const savedProject =
      typeof window !== 'undefined'
        ? localStorage.getItem('gjs-project-main')
        : null;

    const editor = grapesjs.init({
      container: editorRef.current,
      height: '100vh',
      width: 'auto',
      storageManager: false,
      fromElement: false,
      projectData: savedProject ? JSON.parse(savedProject) : undefined,
      components: savedProject
        ? undefined
        : `
          <section style="padding: 40px; text-align: center;">
            <h1>La mia pagina editabile</h1>
            <p>Qui puoi iniziare a modificare il contenuto.</p>
            <a href="/login">Login</a>
          </section>
        `,
      style: savedProject
        ? undefined
        : `
          body {
            margin: 0;
            font-family: Arial, sans-serif;
          }
          h1 {
            font-size: 42px;
            margin-bottom: 16px;
          }
          p {
            font-size: 18px;
            color: #555;
          }
          a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 18px;
            border: 1px solid #ccc;
            text-decoration: none;
            color: #111;
            border-radius: 8px;
          }
        `,
    });

    editor.Panels.addButton('options', [
      {
        id: 'save-draft',
        className: 'fa fa-save',
        command: 'save-draft',
        attributes: { title: 'Salva bozza' },
      },
      {
        id: 'publish-page',
        className: 'fa fa-check',
        command: 'publish-page',
        attributes: { title: 'Pubblica pagina' },
      },
      {
        id: 'load-draft',
        className: 'fa fa-upload',
        command: 'load-draft',
        attributes: { title: 'Carica bozza' },
      },
      {
        id: 'reset-draft',
        className: 'fa fa-trash',
        command: 'reset-draft',
        attributes: { title: 'Reset bozza' },
      },
    ]);

    editor.Commands.add('save-draft', {
      run(ed) {
        try {
          const projectData = ed.getProjectData();
          localStorage.setItem('gjs-project-main', JSON.stringify(projectData));
          alert('Bozza salvata in locale');
        } catch (error) {
          console.error('Errore save-draft:', error);
          alert('Errore durante il salvataggio della bozza');
        }
      },
    });

    editor.Commands.add('publish-page', {
      run(ed) {
        try {
          const html = String(ed.getHtml() ?? '');
          const css = String(ed.getCss() ?? '');
          const projectData = ed.getProjectData();

          localStorage.setItem('gjs-project-main', JSON.stringify(projectData));
          localStorage.setItem('gjs-published-html-main', html);
          localStorage.setItem('gjs-published-css-main', css);

          console.log('HTML pubblicato:', html);
          console.log('CSS pubblicato:', css);

          alert('Pagina pubblicata in locale');
        } catch (error) {
          console.error('Errore publish-page:', error);
          alert('Errore durante la pubblicazione locale');
        }
      },
    });

    editor.Commands.add('load-draft', {
      run(ed) {
        try {
          const raw = localStorage.getItem('gjs-project-main');
          if (!raw) {
            alert('Nessuna bozza salvata');
            return;
          }

          const data = JSON.parse(raw);
          ed.loadProjectData(data);
          alert('Bozza caricata');
        } catch (error) {
          console.error('Errore load-draft:', error);
          alert('Errore durante il caricamento della bozza');
        }
      },
    });

    editor.Commands.add('reset-draft', {
      run(ed) {
        try {
          const ok = window.confirm('Vuoi cancellare la bozza locale?');
          if (!ok) return;

          localStorage.removeItem('gjs-project-main');

          ed.DomComponents.clear();
          ed.Css.clear();

          ed.setComponents(`
            <section style="padding: 40px; text-align: center;">
              <h1>La mia pagina editabile</h1>
              <p>Qui puoi iniziare a modificare il contenuto.</p>
              <a href="/login">Login</a>
            </section>
          `);

          ed.setStyle(`
            body {
              margin: 0;
              font-family: Arial, sans-serif;
            }
            h1 {
              font-size: 42px;
              margin-bottom: 16px;
            }
            p {
              font-size: 18px;
              color: #555;
            }
            a {
              display: inline-block;
              margin-top: 20px;
              padding: 10px 18px;
              border: 1px solid #ccc;
              text-decoration: none;
              color: #111;
              border-radius: 8px;
            }
          `);

          alert('Bozza resettata');
        } catch (error) {
          console.error('Errore reset-draft:', error);
          alert('Errore durante il reset della bozza');
        }
      },
    });

    return () => {
      editor.destroy();
    };
  }, []);

  return <div ref={editorRef} />;
}