const express = require('express');
const morgan = require('morgan');
const app = express();


// Ajuste
app.set('AppName', 'NodeJS - Curso');
app.set('Puesto', '4000');
app.set('view engine', 'ejs');
app.use(morgan('dev'));

// Router
app.get('/', (req, res) => {
const data = [{name: 'Elvis'}, {name: 'Elba'}, {name: 'Jose'}, {name: 'Maria'}]
res.render('index.ejs', {familia: data});
});

// app.use(express.static('public'));


// Servidor
app.listen(app.get('Puesto'), () => {
  console.log(app.get('AppName'));
  console.log(app.get('Puesto'));

  var mysql      = require('mysql');
  var connection = mysql.createConnection({
  host     : '198.20.126.130',
  user     : 'mllhmbdf_web',
  password : 'Winbinbo08'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();
});