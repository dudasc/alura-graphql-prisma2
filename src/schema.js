const { objectType, queryType, makeSchema, mutationType } = require('@nexus/schema');
const { nexusPrisma } = require('nexus-plugin-prisma');
const path = require('path');

// using cod-first and nexus

const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id()
        t.model.nome()
        t.model.email()
        t.model.createdAt()
        t.model.posts()
        // t.init("id"),
        // t.string("nome"),
        // t.string("email"),
        // t.fiel("createdAt", {
        //     type: DateTime,
        // })
    }
})

const Post = objectType({
    name: 'Post',
    definition(t) {
        t.model.id()
        t.model.titulo()
        t.model.conteudo()
        t.model.publicado()
        t.model.autor()
        t.model.createdAt()
    }
})

const Review = objectType({
    name: 'Review',
    definition(t) {
        t.model.id()
        t.model.post()
        t.model.reviewer()
        t.model.nota()
        t.model.createdAt()
    }
})

const Query = queryType({
    name: "Query",
    definition(t) {
        t.crud.users({
            filtering: true,
            ordering: true
        })
        t.crud.user()
        t.crud.reviews()
        // t.list.field('users', {
        //     type: 'User',
        //     resolve: (_, __, { prisma }) => {
        //         return prisma.user.findMany()
        //     }
        // })
    }
})

const Mutation = mutationType({
    name: "Mutation",
    definition(t) {
        t.crud.createOnePost()
    }
})

const schema = makeSchema({
    types: [Query, Review, Post, User, Mutation],
    shouldGenerateArtifacts: true,
    plugins: [nexusPrisma({experimentalCRUD: true})],
    outputs: {
        schema: path.join(__dirname, 'schema.graphql'),
        typegen: path.join(__dirname, '../prisma/generated', 'nexus.ts')
    }
})

module.exports = schema;