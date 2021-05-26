const {Router} = require('express');
const router = Router();

const notas = require('./datosNotas.json');
console.log(notas);

router.get('/', (req,res) => {
    res.json(notas);
});

router.get('/:id', (req,res) => {
    const {id} = req.params;
    notas.forEach(nota => {
        if(nota.id == id){
            res.json(nota);
        }
    });
    console.log(id);
});

module.exports = router;