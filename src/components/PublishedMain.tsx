'use client';

import { useEffect, useState } from 'react';

export default function PublishedMain() {
  const [html, setHtml] = useState<string | null>(null);
  const [css, setCss] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedHtml = localStorage.getItem('gjs-published-html-main');
      const savedCss = localStorage.getItem('gjs-published-css-main');

      setHtml(savedHtml);
      setCss(savedCss);
      setLoaded(true);
    } catch (error) {
      console.error('Errore caricamento published main:', error);
      setLoaded(true);
    }
  }, []);

  if (!loaded) {
    return (
      <section style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Caricamento...</h1>
      </section>
    );
  }

  if (!html) {
    return (
      <section style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Pagina pubblica</h1>
        <p>Nessuna versione pubblicata disponibile.</p>
      </section>
    );
  }

  return (
    <>
      {css && <style dangerouslySetInnerHTML={{ __html: css }} />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}