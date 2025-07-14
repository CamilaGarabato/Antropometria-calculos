self.addEventListener('install', (event) => {
  console.log('Service Worker instalado.');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activado.');
});

self.addEventListener('fetch', (event) => {
  // Este SW no cachea nada. Solo intercepta peticiones.
});
