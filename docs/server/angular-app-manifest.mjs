
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/River-Nile-Food/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/River-Nile-Food"
  },
  {
    "renderMode": 2,
    "route": "/River-Nile-Food/home"
  },
  {
    "renderMode": 2,
    "route": "/River-Nile-Food/about"
  },
  {
    "renderMode": 2,
    "route": "/River-Nile-Food/shop"
  },
  {
    "renderMode": 2,
    "route": "/River-Nile-Food/tours"
  },
  {
    "renderMode": 2,
    "route": "/River-Nile-Food/blog"
  },
  {
    "renderMode": 2,
    "route": "/River-Nile-Food/contact-us"
  },
  {
    "renderMode": 2,
    "route": "/River-Nile-Food/product"
  },
  {
    "renderMode": 2,
    "redirectTo": "/River-Nile-Food",
    "route": "/River-Nile-Food/**"
  }
],
  assets: {
    'index.csr.html': {size: 10502, hash: 'ab6bb03c63577222b2f967ede13940d0f2bfd047dc173f7aa30a5653b53480a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1090, hash: 'd56bd750d60de1ee1f840ba7f22f820d53889ed21373a043e766b07e2f68cb4a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 41002, hash: '850f939b180e4a7df8410ca7be4f9a2c0ecfc73c5f85591e510b16b59ca319ba', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 32382, hash: '2c611b689f42f1522b5dcb9b49770a6753a8acbf588f0beeaf0482ce73c7e3db', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 34571, hash: '749a0bbe0832b8cc329fd24b50bd816b5619faf76954d1ac574207b4d2eb434b', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'tours/index.html': {size: 43847, hash: '50eeb346edaea12ea75f284dbd7c6aae5bdaf4574a94d5edd38d23acfd00a1a8', text: () => import('./assets-chunks/tours_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 33446, hash: 'ceef78a06702b2df06775f53efdac0aac0e07a80e22cfdd36e877acb937429ba', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 40302, hash: '7272b0a6ae3fcc3336bed6e11746b5eae716515a9efed3a0bd04d2824502f7e1', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'product/index.html': {size: 33102, hash: 'fb1a0d7baeec35792497cbcfeba197ac99bbdfd073f1c4f54ad1b43543f112d2', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)},
    'index.html': {size: 41074, hash: '2bc186884d8f01dfc1889a8acb66b308d2a203f0561a41f7b4352abd0f63982f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YT3IUXC4.css': {size: 311595, hash: '4lKahCHYTp0', text: () => import('./assets-chunks/styles-YT3IUXC4_css.mjs').then(m => m.default)}
  },
};
