const postModel = require('../../models/post')

module.exports = {
    Query:{
        async getPosts(){
            try{
                const posts = await postModel.find();
                //console.log(posts);
                return posts;
            }catch (err){
                throw new Error(err);
            }
        }
    },
    Mutation:{
        async createPost(_,{input}){
            console.log("llegue")
            try{
                //console.log("Aqui", input)
                input.createdAt =  new Date();
                const newPost= new postModel(input)
                await newPost.save();
                //console.log(newPost)
                const posts = await postModel.find();
                //console.log(posts);
                return posts;
            }catch (err){
                throw new Error(err);
            }
        }
    }
}