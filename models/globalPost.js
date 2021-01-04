const {model, Schema}= require('mongoose');

const globalPostSchema = new Schema({
    body: String,
    nombreUsuario: String,
    creadoEl: String,
    comentarios:[
        {
            body:String,
            usuario:String,
            creadoEl:String
        }   
    ],
    likes:[
       {
            clase:String,
            usuario:String,
            creadoEl:String
       } 
    ],
    usuario:{
        type: Schema.Types.ObjectId,
        ref:'usuarios'
    }
})

module.exports=  model('GlobalPost', globalPostSchema);