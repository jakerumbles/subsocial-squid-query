// require { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const { ApolloClient, InMemoryCache, gql } = require("@apollo/client");

const API_URL = "https://squid.subsquid.io/subsocial/graphql";

async function main() {
  try {
    /* create the API client */
    const client = new ApolloClient({
      uri: API_URL,
      cache: new InMemoryCache(),
    });

    /* define a GraphQL query  */
    const explorePosts = gql`
      query MyQuery {
        posts(
          orderBy: reactionsCount_DESC
          limit: 3
          where: { createdAtTime_gt: "2023-01-01T00:00:00.000000Z" }
        ) {
          content
          title
          reactionsCount
          sharedPost {
            id
          }
          createdAtTime
          space {
            id
            name
            summary
          }
        }
      }
    `;

    const response = await client.query({ query: explorePosts });

    console.log("Response:", response);
  } catch (error) {
    console.error("Error during application startup:", error);
  }
}

// Call the main function
main();
