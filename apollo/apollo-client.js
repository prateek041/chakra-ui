import {ApolloClient, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
  uri: "https://api.hashnode.com",
  cache: new InMemoryCache() // so that the data retireved can be saved and reused
})

export default client;