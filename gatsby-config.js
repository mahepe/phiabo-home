module.exports = {
    siteMetadata: {
        title: `Phiabo`,
        description: `Miltä yrityksesi liiketoiminta näyttää vuonna 2025?`,
        author: ``
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
        resolve: "gatsby-plugin-react-svg",
        options: {
            rule: {
                include: /images/ // See below to configure properly
            }
        }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // 'gatsby-plugin-offline',
    ],
}
