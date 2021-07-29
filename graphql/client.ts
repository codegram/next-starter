import { ApolloClient, InMemoryCache } from '@apollo/client'
import { PrismicLink } from 'apollo-link-prismic'
import { prismicUrl } from './types'

const client = new ApolloClient({
  link: PrismicLink({
    uri: prismicUrl,
  }),
  cache: new InMemoryCache(),
})

export { client }
