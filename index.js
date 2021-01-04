const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose')

const GlobalPost = require('./models/globalPost')
const {MONGODB} = require('./config')

const typeDefs = gql`
    type GlobalPost{
        id: ID!
        body: String!
        nombreUsuario:String!
        creadoEl:String!
    }
    type Query{
        getPosts: [GlobalPost]
    }
`;
const resolvers ={
    Query:{
        async getPosts(){
            try{
                const posts = await GlobalPost.find();
                console.log(posts);
                return posts;
            }catch (err){
                throw new Error(err);
            }
        }
    }
}

const server = new ApolloServer({
    /*tyDefs:typeDefs pero como tienen el mismo
    nombre, basta con dejarlos así*/
    typeDefs,
    resolvers
})
mongoose
    .connect(MONGODB,{useUnifiedTopology:true, useNewUrlParser:true})
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
