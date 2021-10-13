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
    description: "Just Married servicios para bodas en todo NY",
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
    }
  },
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
      spaceId: `hvuvunxxnk3l`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_API_KEY,
    },
  },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet` // Needed for SEO
  ]
};