module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
    },
    plugins: [
        'gatsby-plugin-react-helmet', 
        'gatsby-plugin-netlify-cms',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                          // Class prefix for <pre> tags containing syntax highlighting;
                          // defaults to 'language-' (eg <pre class="language-js">).
                          // If your site loads Prism into the browser at runtime,
                          // (eg for use with libraries like react-live),
                          // you may use this to prevent Prism from re-processing syntax.
                          // This is an uncommon use-case though;
                          // If you're unsure, it's best to use the default value.
                          classPrefix: "language-",
                        },
                    },
                ]
            }
        },
    ],
};
