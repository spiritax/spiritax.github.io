'use client';
import Layout from '../components/layout';
import { useEffect, useRef } from 'react';

const Giveaway: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const onLoad = () => {
        if (iframe.contentWindow) {
          console.log(iframe.contentDocument);
          console.log(iframe.contentWindow);
          //const iframeHeight = iframe.contentWindow.document.body.scrollHeight;
          //iframe.style.height = `${iframeHeight}px`;
          iframe.style.height = '2000px';
        }
      };

      iframe.addEventListener('load', onLoad);

      return () => {
        iframe.removeEventListener('load', onLoad);
      };
    }
  }, []);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.gleamjs.io/e.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <Layout>
      <h1>Giveaway Page</h1>
      <div className="GleamEmbedyNAVP" data-campaign="yNAVP"></div>
      <iframe ref={iframeRef} id="GleamEmbedyNAVP" style={{ width: '100%', border: 'none' }} src="https://gleam.io/yNAVP/embed" allow="storage-access *; attribution-reporting *; autoplay *; fullscreen *" title="Competition" className="GleamEmbedyNAVP e-embed-frame" data-loaded-widget="true"></iframe>
    </Layout>
  );
};

export default Giveaway;