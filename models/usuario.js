const {model, Schema}= require('mongoose')
const usuarioSchema = new Schema({
    nombreUsuario: String,
    contrasena: String,
    email: String,
    creadoEl: String
})

module.exports=  model('Usuario', usuarioSchema);