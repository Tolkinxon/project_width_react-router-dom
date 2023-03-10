import { request, gql } from 'graphql-request'




export const getDataAnimal = async () => {
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





export const getDataTravel = async () => {
  const URL =
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cleu37k3i37n501uj4xg3bxuf/master'

  const query = gql`
  query MyQuery {
    travelsConnection {
      edges {
        node {
          travelPhoto {
            url
          }
        }
      }
    }
  }
  `

  const result = await request(URL, query)
  return result.travelsConnection.edges
}






export const getDataNature = async () => {
  const URL =
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cleu37k3i37n501uj4xg3bxuf/master'

  const query = gql`
query MyQuery {
  naturesConnection {
    edges {
      node {
        naturePicture {
          url
        }
      }
    }
  }
}
  `

  const result = await request(URL, query)
  return result.naturesConnection.edges
}





export const getDataAthletics = async () => {
  const URL =
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cleu37k3i37n501uj4xg3bxuf/master'

  const query = gql`
query MyQuery {
  athleticConnection {
    edges {
      node {
        athleticsPicture {
          url
        }
      }
    }
  }
}
  `

  const result = await request(URL, query)
  return result.athleticConnection.edges
}





export const getDataFood = async () => {
  const URL =
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cleu37k3i37n501uj4xg3bxuf/master'

  const query = gql`
query MyQuery {
  foodsConnection {
    edges {
      node {
        foodPicture {
          url
        }
      }
    }
  }
}
  `

  const result = await request(URL, query)
  return result.foodsConnection.edges
}


