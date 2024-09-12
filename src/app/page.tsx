'use client';
import Layout from "./components/layout";
import { useEffect, useRef } from 'react';

const Home: React.FC = () => {
    const scriptLoadedRef = useRef(false);
    const embedInitializedRef = useRef(false);

    useEffect(() => {
      if (!scriptLoadedRef.current) {
        const script = document.createElement('script');
        script.src = 'https://embed.twitch.tv/embed/v1.js';
        script.async = true;
        script.onload = () => {
          scriptLoadedRef.current = true;
          if (!embedInitializedRef.current) {
            new window.Twitch.Embed('twitch-embed', {
              width: '100%',
              height: '480',
              channel: 'chatduchaos', // Remplacez par le nom de votre chaîne Twitch
            });
            embedInitializedRef.current = true;
          }
        };
        document.body.appendChild(script);
      } else if (!embedInitializedRef.current) {
        new window.Twitch.Embed('twitch-embed', {
          width: '100%',
          height: '480',
          channel: 'chatduchaos',
        });
        embedInitializedRef.current = true;
      }
    }, []);

    return (
        <Layout>
            <h1>Home Page</h1>
            <div id="twitch-embed"></div>
        </Layout>
    );
};

export default Home;