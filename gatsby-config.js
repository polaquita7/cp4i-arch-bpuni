module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Carbon',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: `/cp4i-arch-bpuni`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Integration Deep Dive - BP University',
        icon: 'src/images/favicon.svg',
        short_name: 'Integration Deep Dive',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        remarkPlugins: [require("remark-grid-tables")],
      },
    },
  ],
};
