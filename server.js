'use strict';

var express = require('express');
var cors = require('cors');

var multer = require('multer');
var upload = multer();

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.any(), function(req, res) {
  if (req.files.length == 1) {
    res.json({file_name: req.files[0].fieldname, file_size: req.files[0].size});
  } else {
    res.send("<h2>Too many files. Send only one.</h2>");
  }
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})