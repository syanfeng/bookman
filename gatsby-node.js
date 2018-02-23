const path = require("path");
const _ = require('lodash')

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {

        const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
        const categoryTemplate = path.resolve(`src/templates/category.js`);

        resolve(
            graphql(
                `{
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                  limit: 1000
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
                      html
                      id
                      frontmatter {
                        date
                        path
                        title
                        category
                      }
                    }
                  }
                }
             }`).then(result => {
                    if (result.errors) {
                        return Promise.reject(result.errors);
                    }
                    const posts = result.data.allMarkdownRemark.edges;
                    posts.forEach(({ node }) => {
                            createPage({
                                path: node.frontmatter.path,
                                component: blogPostTemplate,
                                context: {} // additional data can be passed via context
                            });
                        });

                    let categorys = [];
                    _.each(posts, edge => {
                        if (_.get(edge, 'node.frontmatter.category')) {
                          categorys.push(edge.node.frontmatter.category);
                        }
                    });
                    categorys.forEach(category => {
                        createPage({
                            path: `/category/${category}/`,
                            component: categoryTemplate,
                            context: {
                                category,
                            },
                        });
                    });
                })
        );
    })
}