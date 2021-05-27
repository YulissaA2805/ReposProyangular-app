const {Router} = require('express');
const router = Router();

const notas = require('./datosNotas.json');
console.log(notas);

const notasCtrl = require('../controllers/notas.controller');

router.get('/', notasCtrl.getNotas);

router.get('/:id', notasCtrl.getNota);

router.post('/', notasCtrl.createNota);

/* no creo necesitar estos metodos pero aun asi los inclui */
router.delete('/:id', notasCtrl.deleteNota);

router.put('/:id', notasCtrl.updateNota);

module.exports = router;