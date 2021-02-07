const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/horse/Desktop/sites/new-folio/next-portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/horse/Desktop/sites/new-folio/next-portfolio/src/pages/About.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/horse/Desktop/sites/new-folio/next-portfolio/src/pages/Contact.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/Users/horse/Desktop/sites/new-folio/next-portfolio/src/pages/Elements.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/Users/horse/Desktop/sites/new-folio/next-portfolio/src/pages/Generic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/horse/Desktop/sites/new-folio/next-portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/horse/Desktop/sites/new-folio/next-portfolio/src/pages/Projects.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/Users/horse/Desktop/sites/new-folio/next-portfolio/src/pages/thanks.js")))
}

