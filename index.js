const express = require('express');
const path = require('path')
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// this is my routing's

app.get('/', function(req, res){
    res.render("index");
});

// this is the port number:

app.listen(3050);

