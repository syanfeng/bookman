import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header'
import Link from "gatsby-link";

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
    pathContext,
    data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
    const {category} = pathContext;
    const { edges:posts, totalCount } = data.allMarkdownRemark;
    return (
        <div>
            <Header currPage={category}/>
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
                                        <time title="创建于">{post.frontmatter.date}</time>
                                    </span>
                                    <span className="post-meta-divider">|</span>
                                    <span className="post-category">
                                        <span className="post-meta-item-text">分类</span>
                                        <span title="分类"> 
                                            <Link to={`/category/${post.frontmatter.category}`}> {post.frontmatter.category}</Link>
                                        </span>
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
    query BlogPostByCategory($category: String!) {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { category: { eq: $category } } }
        ){
            totalCount
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        date(formatString: "YYYY-MM-DD")
                        path
                        title
                        category
                    }
                }
            }
        }
    }
`;