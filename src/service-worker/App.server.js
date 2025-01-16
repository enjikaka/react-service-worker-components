import * as React from 'react';

export function App({ data }) {
  return (
    <div>
      <h1>React Server Components in a Service Worker!</h1>
      <p>{data.message}</p>
    </div>
  );
}