const {Router} = require('express');
const router = Router();

const entradas = require('./datosEntradas.json');
//console.log(entradas);

router.get('/', (req,res) => {
    res.json(entradas);
});

router.get('/:id', (req,res) => {
    const {id} = req.params;
    entradas.forEach(entrada => {
        if(entrada.id == id){
            res.json(entrada);
        }
    });
    console.log(id);
});

module.exports = router;