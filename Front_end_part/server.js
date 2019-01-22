var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
app.options('*', cors());


app.post('/login', function (req, res) {

  console.log(req.query)
  res.sendStatus(200);
});

app.post('/register', function (req, res) {
  console.log('123');
  console.log(req.query)
  res.sendStatus(200);
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});