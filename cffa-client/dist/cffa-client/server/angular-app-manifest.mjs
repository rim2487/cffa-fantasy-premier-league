
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
    'index.csr.html': {size: 28543, hash: '01b4d8cf5bd9da370d838be4a544b5f6673f11d4d9e82c6e20b351784b59a6a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17208, hash: 'e7fe4d50d0353c392b726ce84bceacb37f227599df687dbd07780644ad27efe8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 47590, hash: '0a0ef366b568ea0019e222f702f67cb3b9ffb5cfaba67000a1eacfd05b2d73ec', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NBNS354P.css': {size: 17633, hash: 'vyZJ4IFA7G8', text: () => import('./assets-chunks/styles-NBNS354P_css.mjs').then(m => m.default)}
  },
};
