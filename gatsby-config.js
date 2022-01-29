/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

https: module.exports = {
  siteMetadata: {
    title: "Just Married",
    description: "Just Married oficiante de bodas en todo New York",
    author: "Aneudy Adames",
    titleTemplate: "%s | Just Married",
    url: "https://just-married.us",
    twitterUsername: "@Lismarte17",
    siteUrl: "https://just-married.us",
    image: `/main.png`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-GKTWH1JZ87", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",

      options: {
        host: "https://just-married.us",
        sitemap: "",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`, // Needed for SEO,
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0,
        duration: 300,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `57uzuhp84xhf`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
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
    },
    `gatsby-plugin-offline`,
  ],
}
