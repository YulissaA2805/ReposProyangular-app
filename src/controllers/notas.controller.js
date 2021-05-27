const notasCtrl = {};

//const notas = require('../routes/datosNotas.json');
const notas = require('../models/notas.js');

notasCtrl.getNotas = async (req, res) => {
    const notes = await notas.find();
    res.json(notes);
}

notasCtrl.createNota = async (req, res) => {
    const newNota = new notas(req.body);
    await newNota.save();
    console.log(newNota);
    res.send({message: 'producto creado'});
}

/* */

notasCtrl.getNota = async (req, res) => {
    //console.log(req.params);
    const notaf = await notas.findById(req.params.id);
    res.send(notaf);
}

notasCtrl.deleteNota = async (req, res) => {
    //console.log(req.params);
    const notaF = await notas.findByIdAndDelete(req.params.id);
    res.send({message:'nota eliminada'}, notaF);
}

notasCtrl.updateNota = async (req, res) => {
    //console.log(req.params);
    const notaF = await notas.findByIdAndUpdate(req.params.id, req.body);
    res.send({message:'nota modificada'}, notaF);
}

module.exports = notasCtrl;
