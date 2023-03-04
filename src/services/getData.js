import { request, gql } from 'graphql-request'

export const getData = async () => {
  const URL =
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cleu37k3i37n501uj4xg3bxuf/master'

  const query = gql`
    query MyQuery {
      photosConnection {
        edges {
          node {
            category
            photoUrl {
              url
            }
          }
        }
      }
    }
  `

  const result = await request(URL, query)
  return result.photosConnection.edges
}
