import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Posts = ({ data }) => (
  <Layout>
    <h1>List of Posts </h1>
    <small>
      The below is take from API{" "}
      <a href="https://jsonplaceholder.typicode.com/posts" target="blank">
        <strong>'https://jsonplaceholder.typicode.com/posts'</strong>
      </a>
    </small>
    <br />
    <br />
    {data.allRestApiPosts.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.title}</h3>
        <p> {post.node.body} </p>
        <br />
        <small>Posted by User_{post.node.userId}</small>
        <hr />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query PostsQuery {
    allRestApiPosts {
      edges {
        node {
          id
          title
          body
          userId
        }
      }
    }
  }
`
export default Posts
