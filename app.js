const express = require('express');
const app = express();


// Directorio Publico
app.use(express.static('public'));

app.get('/contact', (req, res) => {
res.send('<h1>Contacto</h1>')
});

app.get('/test', (req, res) => {
  res.send('<h1>Test</h1>')
  });

// Servidor
app.listen(3000, () => {
  console.log('Servidor Iniciado!');
});