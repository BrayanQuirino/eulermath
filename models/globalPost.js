const {model, Schema}= require('mongoose');

const globalPublicacionSchema = new Schema({
    body: String,
    nombreUsuario: String,
    creadoEl: String,
    comentarios:[
        {
            body:String,
            nombreUsuario:String,
            creadoEl:String
        }   
    ],
    likes:[
       {
            clase:String,
            nombreUsuario:String,
            creadoEl:String
       } 
    ],
    usuario:{
        type: Schema.Types.ObjectId,
        ref:'usuarios'
    }
},{collection: 'globalPost'});

module.exports=  model('GlobalPublicacion', globalPublicacionSchema);