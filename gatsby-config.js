const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    // manifestIcon: 'src/assets/img/Planet-R-W.png',
    icon: 'src/assets/img/Planet-R-W.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: config.manifestName,
    //     short_name: config.manifestShortName,
    //     start_url: config.pathPrefix || config.manifestStartUrl,
    //     background_color: config.manifestBackgroundColor,
    //     theme_color: config.manifestThemeColor,
    //     display: config.manifestDisplay,
    //     icon: config.manifestIcon, // This path is relative to the root of the site.
    //   },
    // },
    'gatsby-plugin-sass',
    
  ],
};
