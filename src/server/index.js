import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../components/App';

const app = express();
app.use(express.static('build/public'));

app.get('*', (req, res) => {
    // Dane inicjalne, które zostaną wykorzystane zarówno na serwerze jak i kliencie
    const initialData = {
        serverTime: new Date().toISOString()
    };

    // Renderowanie aplikacji do HTML na serwerze
    const html = renderToString(<App />);

    // Wysyłanie kompletnej strony HTML z osadzonymi danymi i zhydratowaną aplikacją
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Demo SSR + CSR</title>
        <script>
          // Przekazanie danych inicjalnych do klienta
          window.__INITIAL_DATA__ = ${JSON.stringify(initialData)};
        </script>
      </head>
      <body>
        <!-- Kontener na aplikację wyrenderowaną na serwerze -->
        <div id="root">${html}</div>
        
        <!-- Skrypt kliencki do hydratacji -->
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});