// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/Contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-elements-js": () => import("./../../../src/pages/Elements.js" /* webpackChunkName: "component---src-pages-elements-js" */),
  "component---src-pages-generic-js": () => import("./../../../src/pages/Generic.js" /* webpackChunkName: "component---src-pages-generic-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("./../../../src/pages/Projects.js" /* webpackChunkName: "component---src-pages-projects-js" */)
}

