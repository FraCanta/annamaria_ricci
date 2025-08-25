// lib/queries.js
import { gql } from "graphql-request";

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
      edges {
        node {
          title
          uri
          excerpt
          date
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
          commentCount
          comments {
            nodes {
              author {
                node {
                  name
                  email
                  avatar {
                    url
                  }
                }
              }
              content
              date
            }
          }
          author {
            node {
              nickname
              name
            }
          }
        }
      }
    }
  }
`;

export const SEARCH_POSTS = gql`
  query SearchPosts($search: String!) {
    posts(where: { search: $search }) {
      edges {
        node {
          id
          title
          uri
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;
