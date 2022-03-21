const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
 type User {
   name: String
   age: Int
 }
 type Query {
   users: [User]
 }
`

const resolvers = {
 Query: {
   users: () => [{ name: "Ana", age: 12 }, {name: "Bia", age: 10 }]
 }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen({ port: 4000 }, () => console.log(`Servidor pronto em localhost:4000`)) 