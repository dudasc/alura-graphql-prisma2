const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');

const schema = require('./schema');

const prisma = new PrismaClient({ log: ['query'] });

// using SDL language
// const typeDefs = gql`
//   scalar DateTime

//   type User {
//     id: Int
//     nome: String
//     email: String
//     createdAt: DateTime
//     posts: [Post]
//   }

//   type Post {
//     id: Int
//     titulo: String
//     conteudo: String
//   }

//   type Query {
//     users: [User]
//     postsByUser (id: Int): [Post]
//     postsByReviewer (id: Int): [Post]
//   }

//   type Mutation {
//     createUserAndPost (nome: String, email: String, titulo: String, conteudo: String): User
//   }
// `

// const resolvers = {
//   Query: {
//     users: async () => await prisma.user
//       .findMany({ include: { posts: true }}),

//     postsByUser: async (_, args) => {
//       return prisma.user
//         .findUnique({ where: { id: Number(args.id) }}).posts()
//     },

//     postsByReviewer: async (_, args) => {
//       return prisma.review
//         .findUnique({ where: { id: Number(args.id) }})
//         .reviewer()
//         .posts()
//     }
//   },
//   Mutation: {
//     createUserAndPost: async (_, args) => {
//       const newUser = await prisma.user.create({
//         data: {
//           nome: args.nome,
//           email: args.email,
//           posts: {
//             create: {
//               titulo: args.titulo,
//               conteudo: args.conteudo,
//             }
//           }
//         }
//       })
//       return newUser;
//     }
//   }
// }

// const server = new ApolloServer({ typeDefs, resolvers })

const server = new ApolloServer({ schema, context: { prisma } })
server.listen({ port: 4000 }, () => console.log(`Servidor pronto em localhost:4000`)) 