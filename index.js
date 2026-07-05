const express = require('express');
const app = express()


app.get('/', (req, res) => {
  res.send('ddsdsHeWodsdsdrld!')
})

app.get('/About', (req,res) =>{
    res.send('hi am about section')
})

app.get('/Contact', (req,res) =>{
    res.send('hi am Contact section')
})

app.listen(5500);