import { request, qpl } from "graphql-request";

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            scheduledIn {
              id
            }
            title
            excerpt
            categories {
              name
              slug
            }
            featureImage {
              url
            }
          }
        }
      }
    }
  `;
};
