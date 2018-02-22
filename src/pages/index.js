import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import Header from '../components/Header'

export default function Index({
    data
}) {
    console.log(data)
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <div>
            <Header/>
            <div className="main-inner">
                <div className="am-container blog-posts posts-expand">
                    {posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                        return (
                        <article className="blog-post-preview post post-type-normal" key={post.id}>
                            <header className="post-header">
                                <h1 className="post-title">
                                    <Link className="post-title-link" to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                                </h1>
                                <div className="post-meta">
                                    <span className="post-time">
                                        <span className="post-meta-item-text">发表于</span>
                                        <time title="创建于" datetime="">{post.frontmatter.date}</time>
                                    </span>
                                    <span className="post-meta-divider">|</span>
                                    <span className="post-category">
                                        <span className="post-meta-item-text">分类于</span>
                                        <time title="创建于" datetime="">{post.frontmatter.date}</time>
                                    </span>
                                </div>
                            </header>
                            <div className="post-body">
                                <p>{post.excerpt}</p>
                            </div>
                            <div className="post-button text-center">
                                <Link className="btn" to={post.frontmatter.path}>阅读全文 »</Link>
                            </div>
                        </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export const pageQuery = graphql`
 query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
 }
`;