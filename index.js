const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose')

const resolvers = require('./graphql/resolvers')
const {MONGODB} = require('./config')
const typeDefs = require('./graphql/typeDefs')


const server = new ApolloServer({
    /*tyDefs:typeDefs pero como tienen el mismo
    nombre, basta con dejarlos así*/
    typeDefs:typeDefs,
    resolvers: resolvers
})
mongoose
    .connect(MONGODB,{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false,useCreateIndex: true})
    .then(()=>{
        console.log('MongoDB Connected')
        return server.listen({port:5000});
    })
    .then((res)=>{
        console.log(`Server running at ${res.url}`)
    })
    .catch(err => {
        console.error(err)
    })
