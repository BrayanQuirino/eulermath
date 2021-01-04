const {model, Schema}= require('mongoose')
const usuarioSchema = new Schema({
    nombreUsuario: String,
    password: String,
    email: String,
    creadoEl: String
})

module.exports=  model('Usuario', usuarioSchema);