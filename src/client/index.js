import { hydrateRoot } from 'react-dom/client';

async function fetchAndHydrateRSC() {
  try {
    const response = await fetch('/rsc', {
      headers: { Accept: 'text/html' },
    });

    const html = await response.text();

    const container = document.getElementById('root');
    container.innerHTML = html;

    hydrateRoot(container, null);
  } catch (error) {
    console.error('Error fetching or hydrating RSC:', error);
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(() => {
    console.log('Service Worker Registered');
    fetchAndHydrateRSC();

    if (!navigator.serviceWorker.controller) {
      window.location.reload();
    }
  });
}