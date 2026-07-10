//This is my moduls's
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// this is my routing's

app.get('/', function (req, res) {
  fs.readdir('./files', function (err, filenames) {
    if (err) return res.render('index', { files: [] });

    const files = filenames.map(function (filename) {
      return {
        title: filename.replace('.txt', ''),
        description: fs.readFileSync(`./files/${filename}`, 'utf-8'),
        _id: filename
      };
    });

    res.render('index', { files: files });
  });
});
app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.description, function(err){})
    res.redirect('/')
});


// this is the port number: 

app.listen(3050);

