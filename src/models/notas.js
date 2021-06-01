const {Schema, model} = require('mongoose')
const NotaSchema = new Schema({
    text:{type:String, required:true}
    //,color:{type:String, required:true}
},{
    timestamps: true, //agregar tiempo de creacion y modificacion
    versionKey: false //
})

module.exports = model('notas', NotaSchema);