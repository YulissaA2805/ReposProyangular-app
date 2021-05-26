const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//configuraciones
app.set('port', 3000);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//rutas
app.use('/api/productos', require('./routes/api'));
app.use('/api2/entradas', require('./routes/api2'));
app.use('/api/notas', require('./routes/api3'));

//Empezando el servidor
app.listen(app.get('port'));
console.log("servidor para ProyAngular4");