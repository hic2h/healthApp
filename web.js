var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();

app.use(morgan('dev'));
app.set('appPath', path.join(__dirname , 'dist'));
app.use(express.static(app.get('appPath')));

app.route('/*')
  .get(function(req, res){
  res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
});

app.listen(process.env.PORT || 5000);

