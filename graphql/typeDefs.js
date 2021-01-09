const {gql} = require('apollo-server')

module.exports = gql`
    type GlobalPublicacion{
        id: ID!
        body: String!
        nombreUsuario:String!
        creadoEl:String!
    }
    type Query{
        getPosts: [GlobalPublicacion]
    }
`;