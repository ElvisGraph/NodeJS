const express = require('express');
const app = express();


// Directorio Publico
app.use(express.static('public'));

// Servidor
app.listen(3000, () => {
  console.log('Servidor Iniciado!');
});