# react-service-worker-components

A demo of rendering React Server Components in a Service Worker. 

I've previously done some [experiments rendering HTML (web components) with data from a JSON API in the Service Worker](https://github.com/enjikaka/tidal-sdk-demo-app), to avoid additional services on the server aside of the main API. Surely, it has it's pros and cons. One nice thing is that you can still "server side render" user-unique data that cannot be cached on your server, but can be locally in the server worker after genration - provided that your API provides cache headers for API resources so you know when to invalidate. You can also utilize that most clients todays are thick rather than [thin](https://en.wikipedia.org/wiki/Thin_client), and use their processing power instead of paying for your [expensive hipster server software](https://vercel.com/).
