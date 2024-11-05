var express = require('express');
var app = express();
const path = require("path");


app.get('/',function(req,res){res.sendFile(path.join(__dirname, 'index.html')); //__dirname : Ritorna la cartel
});

app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname,'about.html')); //__dirname : Ritorna la cartell
    });
app.get('/sitemap',function(req,res){
        res.sendFile(path.join(__dirname,'sitemap.html')); //__dirname : Ritorna la cartell
        });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});