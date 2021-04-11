const {model, Schema}= require('mongoose');

const postSchema = new Schema({
    body: String,
    userName: String,
    createdAt: String,
    comments:[
        {
            body:String,
            userName:String,
            createdAt:String
        }   
    ],
    likes:[
       {
            type:String,
            userName:String,
            createdAt:String
       } 
    ],
    user:{
        type: Schema.Types.ObjectId,
        ref:'users'
    }
},{collection: 'posts'});

module.exports=  model('Post', postSchema);