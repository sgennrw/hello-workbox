importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'my-cache',
    precache: 'precache',
    runtime: 'runtime',
  });
  
// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    // Use the cache if it's available.
    workbox.strategies.cacheFirst({
        cacheName: 'my-cache-Stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);
// 2. images
workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg)$'),
    // Use the cache if it's available.
    workbox.strategies.cacheFirst({
        cacheName: 'my-cache-Images',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);

// 3. cache whether result
workbox.routing.registerRoute(
    new RegExp('https://community-open-weather-map.p.rapidapi.com/forecast'),
    // Use cache but update in the background.
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'my-cache-whether',
        cacheExpiration: {
            maxAgeSeconds: 60 * 30 //cache the whether content for 30mn
        }
    })
);
  
// Precaching a file will ensure that a file is downloaded and cached before a service worker is installed, 
// meaning that if your service worker is installed, your files are cached.
workbox.precaching.precacheAndRoute([]);