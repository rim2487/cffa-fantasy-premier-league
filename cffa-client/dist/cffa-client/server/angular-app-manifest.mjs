
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24461, hash: '8be478850be4fda1cd126375f1064db6bfd90f87a8526aef91f1bb7aea5eb588', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17210, hash: 'f558d937dcd34148c2f090e543d1902f3d2649a1dea952ac4335a6a90be3541d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49662, hash: 'c49e499d60a7448a1749a8c5131ec5fa65940e3803b34d49e44c10e96390dfae', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KHNFPJ54.css': {size: 10501, hash: 'WYHFcU8xbbM', text: () => import('./assets-chunks/styles-KHNFPJ54_css.mjs').then(m => m.default)}
  },
};
