const express = require("express");
const app = express();

let contador = 0;
let contadorIncrement1 = 0;
let contadorIncrement5 = 0;

app.get("/contador", function (req, res) {
  res.send({ contador });
});

app.get("/incrementar1", function (req, res) {
    contador++;
    contadorIncrement1++;
    res.send({ contador });
});

app.get("/incrementar5", function (req, res){
    contador = contador + 5;
    contadorIncrement5++;
    res.send({ contador });
});

app.get("/relatorio", function (req, res) {
    res.send ( {
        contador,
        contadorIncrement1,
        contadorIncrement5
    });
});

app.listen(3000);

module.exports = app;
