module.exports = {
    siteMetadata: {
        title: `Just In Time Tutoring`,
        author: `Justin Sunho Kim`,
        description: `Just In Time Tutoring.`,
        siteUrl: `http://justintimetutoring.com`,
        image: "/images/logo.jpg",
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/images`,
                name: `images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/pages`,
                name: `pages`,
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: "images",
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                    },
                ],
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
        `gatsby-plugin-resolve-src`,
        "gatsby-transformer-json",
    ],
};
