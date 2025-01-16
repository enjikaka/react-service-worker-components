import React from 'react';
import { renderToReadableStream } from 'react-dom/server';
import { App } from './App.server.js';

self.addEventListener('fetch', (event) => {
  console.log(`Handling fetch event for ${event.request.url}`);

  const url = new URL(event.request.url);

  if (url.pathname === '/rsc') {
    event.respondWith(handleRSCRequest());
  }
});

async function handleRSCRequest() {
  try {
    const stream = await renderToReadableStream(<App message="Hello from RSC via Service Worker!" />);

    return new Response(stream, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch (error) {
    console.error('Error rendering RSC:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}