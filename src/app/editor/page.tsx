"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    grapesjs: any;
  }
}

export default function EditorPage() {
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let editor: any;

    const addCss = async () => {
      if (!document.querySelector('link[data-gjs-css="true"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/grapesjs/dist/css/grapes.min.css";
        link.setAttribute("data-gjs-css", "true");
        document.head.appendChild(link);
      }
    };

    const addJs = async () => {
      if (!window.grapesjs) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://unpkg.com/grapesjs";
          script.onload = () => resolve();
          script.onerror = () => reject();
          document.body.appendChild(script);
        });
      }
    };

    const init = async () => {
      await addCss();
      await addJs();

      if (!editorRef.current) return;

      editor = window.grapesjs.init({
        container: editorRef.current,
        fromElement: false,
        height: "100%",
        storageManager: false,
        blockManager: {
          appendTo: "#blocks",
          blocks: [
            {
              id: "hero",
              label: "Hero",
              content: `
                <section style="padding:60px 40px;background:#ffffff;">
                  <h1 style="font-size:48px;margin-bottom:16px;">Titolo principale</h1>
                  <p style="font-size:18px;max-width:700px;">Descrizione del progetto o del veicolo.</p>
                </section>
              `,
            },
            {
              id: "section",
              label: "Sezione",
              content: `
                <section style="padding:40px;background:#ffffff;">
                  <h2>Nuova sezione</h2>
                  <p>Scrivi qui il testo.</p>
                </section>
              `,
            },
            {
              id: "text",
              label: "Testo",
              content: `<p>Paragrafo di esempio.</p>`,
            },
            {
              id: "image",
              label: "Immagine",
              content: `<img src="https://via.placeholder.com/1200x600" alt="immagine" />`,
            },
            {
              id: "vehicle-card",
              label: "Scheda veicolo",
              content: `
                <div style="max-width:420px;border:1px solid #ddd;border-radius:12px;padding:16px;background:#fff;">
                  <img src="https://via.placeholder.com/400x220" alt="Veicolo" style="width:100%;border-radius:8px;margin-bottom:12px;" />
                  <h3 style="margin:0 0 8px;">Nome Veicolo</h3>
                  <p style="margin:0 0 6px;">Prezzo: € 12.900</p>
                  <p style="margin:0 0 12px;">Anno: 2020</p>
                  <a href="#" style="display:inline-block;padding:10px 16px;background:#0b5c74;color:#fff;text-decoration:none;border-radius:6px;">Dettagli</a>
                </div>
              `,
            },
            {
              id: "button",
              label: "Pulsante",
              content: `<a href="#" style="display:inline-block;padding:10px 16px;background:#0b5c74;color:#fff;text-decoration:none;border-radius:6px;">Contattaci</a>`,
            },
          ],
        },
        components: `
          <section style="padding:60px 40px;background:#ffffff;">
            <h1 style="font-size:48px;margin-bottom:16px;">Editor GrapesJS</h1>
            <p style="font-size:18px;max-width:700px;">Qui puoi iniziare a ricostruire il layout che hai linkato.</p>
          </section>
        `,
      });

      const exportBtn = document.getElementById("btn-export");
      const clearBtn = document.getElementById("btn-clear");
      const closeBtn = document.getElementById("btn-close");
      const output = document.getElementById("export-output");

      exportBtn?.addEventListener("click", () => {
        const html = editor.getHtml();
        const css = editor.getCss();
        if (output) {
          output.style.display = "block";
          output.textContent = `<style>\n${css}\n</style>\n${html}`;
        }
      });

      clearBtn?.addEventListener("click", () => {
        editor.setComponents(`
          <section style="padding:60px 40px;background:#ffffff;">
            <h1>Nuova pagina</h1>
            <p>Pagina svuotata.</p>
          </section>
        `);
        editor.setStyle("");
      });

      closeBtn?.addEventListener("click", () => {
        if (output) output.style.display = "none";
      });
    };

    init();

    return () => {
      if (editor) editor.destroy();
    };
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#f3f4f6" }}>
      <div
        style={{
          height: "56px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "0 16px",
          background: "#111827",
          color: "white",
          borderBottom: "1px solid #1f2937",
        }}
      >
        <strong>Editor GrapesJS</strong>

        <button style={primaryBtn} id="btn-export">Esporta HTML + CSS</button>
        <button style={secondaryBtn} id="btn-clear">Svuota pagina</button>
        <button style={secondaryBtn} id="btn-close">Chiudi export</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", height: "calc(100vh - 56px)" }}>
        <aside
          style={{
            background: "white",
            borderRight: "1px solid #d1d5db",
            padding: "12px",
            overflow: "auto",
          }}
        >
          <h2 style={{ fontSize: "16px", margin: "0 0 12px" }}>Blocchi</h2>
          <div id="blocks" style={{ display: "flex", flexDirection: "column", gap: "10px" }} />
        </aside>

        <main style={{ overflow: "hidden" }}>
          <div ref={editorRef} style={{ height: "100%" }} />
        </main>
      </div>

      <pre
        id="export-output"
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "min(700px, calc(100vw - 40px))",
          maxHeight: "50vh",
          overflow: "auto",
          background: "white",
          border: "1px solid #d1d5db",
          borderRadius: "10px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          padding: "16px",
          display: "none",
          whiteSpace: "pre-wrap",
          fontSize: "13px",
          zIndex: 9999,
        }}
      />
    </div>
  );
}

const primaryBtn: React.CSSProperties = {
  border: 0,
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  background: "#0b5c74",
  color: "white",
};

const secondaryBtn: React.CSSProperties = {
  border: 0,
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  background: "#e5e7eb",
  color: "#111827",
};