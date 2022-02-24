var express = require('express');
const path = require('path/posix');
var app = express();

app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/src'))
//Rota para index
app.get('/', function(req, res) {
    //Renderizando uma página html
    res.sendFile('index.html', {root: path.join(__dirname, '/views') });
});
app.get('/teste',(req,res)=>{
    res.sendFile(__dirname +'/views/index.html')
})
app.listen(3000)
