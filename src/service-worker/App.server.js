import * as React from 'react';

export function App({ message }) {
  return (
    <div>
      <h1>React Server Components in a Service Worker!</h1>
      <p>{message}</p>
    </div>
  );
}