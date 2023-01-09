const express = require('express');
const cors = require('cors');

const sqlite3 = require('sqlite3').verbose();
const db =  new sqlite3.Database('./dados.db');

const app = express();
app.use(express.json());
app.use(cors());

function checksEstabelishment(request, response, next) {
  const { estabelecimento } = request.body

  db.all(`SELECT id_cnes, nome, latitude, longitude FROM estabelecimentos WHERE id_cnes = ?`, [estabelecimento], (err, rows) => {
    if (rows.length >= 1) {
      request.status = 200
      request.downtown = rows
    } else {
      request.status = 404
      request.error = 'Records does not found!'
    }

    if (err) {
      request.status = 500
      request.error = 'Server internal error!'
    }

    return next()
  })
}

function checksStabilishmentsByDowntown(request, response, next){
  let { municipio_id } = request.body

  db.all(`select id_cnes, nome, latitude, longitude from estabelecimentos where municipio_id_sus = ?`, [municipio_id], (err,rows) => {
    if (!rows.length){
      request.status = 404
      request.error = 'Records does not found!'
    } else {
      request.status = 200
      request.estabelecimento = rows
    }

    if (err) {
      request.status = 500
      request.error  = 'Server internal error!'
    }

    return next()
  })
}

app.get('/obterEstabelecimentoPorId', checksEstabelishment, (request, response) => {
  const { status, downtown, error } = request;
  let data = downtown

  if (status == 404) {
    data = error
  }

  return response.status(status).json(data);
})

app.get('/listarEstabelecimentosPorMunicipio', checksStabilishmentsByDowntown, (request, response) => {
  const { status, estabelecimento, error } = request;
  let data = estabelecimento

  if (status == 404){
    data = error 
  }

  return response.status(status).json(data);
})

app.listen(3333);