var express = require('express');
var fs = require('fs');
var mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');

var app = express();
app.engine('html', mustacheExpress()); 
app.set('view engine', 'html');
app.set('views', 'templates');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
    fs.readFile('templates/hello.html', "utf-8", function(err, templateFile){
        res.write(templateFile);
        res.end();            
    });
});

app.post('/', function(req, res){
    res.render('hello', {name:req.body.name})  
})

var port = 3001;
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});