import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header'
import Link from "gatsby-link";

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
    const { markdownRemark: post } = data; // data.markdownRemark holds our post data
    return (
        <div className="page-post-detail">
            <Header />
            <div className="main-inner">
                <div className="blog-post-container am-container">
                    <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
                    <div className="blog-post">
                        <header className="post-header">
                            <h2 className="post-title">{post.frontmatter.title}</h2>
                        </header>
                        <div className="post-meta">
                            <span className="post-time">
                                <span className="post-meta-item-text">发表于</span>
                                <time title="创建于" >{post.frontmatter.date}</time>
                            </span>
                            <span className="post-meta-divider">|</span>
                            <span className="post-category">
                                <span className="post-meta-item-text">分类</span>
                                <span title="分类" >
                                    <Link to={`/category/${post.frontmatter.category}`}> {post.frontmatter.category}</Link>
                                </span>
                            </span>
                        </div>
                        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
            category
        }
        }
    }
`;