/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Just Married",
    description: "Just Married oficiante de bodas en todo New York",
    author: "@AneudyA4",
    titleTemplate: "%s | Just Married",
    url: "https://demo-justmarried.netlify.app",
    twitterUsername: "@AneudyA4",
    image: `/main.png`
  },


  plugins: [{
    resolve: 'gatsby-plugin-robots-txt',

    options: {
      host: 'https://demo-justmarried.netlify.app',
      sitemap: '',
      env: {
        development: {
          policy: [{ userAgent: '*', disallow: ['/'] }]
        },
        production: {
          policy: [{ userAgent: '*', allow: '/' }]
        }
      }
    },
  },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`, // Needed for SEO,s
  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      offset: 0,
      duration: 300
    }
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `57uzuhp84xhf`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_API_KEY,
    },

  }, {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Just Married  Wedding Service`,
      short_name: `Just Married`,
      icon: `src/images/icon.png`,
      start_url: `/`,
      background_color: `#f5eae6`,
      theme_color: `#f5eae6`,
      display: `standalone`,
      icon_options: {
        // For all the options available,
        // please see the section "Additional Resources" below.
        purpose: `any maskable`,
      },
    },

  }, `gatsby-plugin-offline`
  ]
};