const {gql} = require('apollo-server')

module.exports = gql`
    type post{
        id: ID!
        body: String!
        userName:String!
        createdAt:String!
    }
    
    input postInput{
        body: String!
        userName:String!
    }

    type Query{
        getPosts: [post]
    }

    type Mutation{
        createPost(input: postInput): [post]
    }
`;