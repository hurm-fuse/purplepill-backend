const express = require('express');
const app = express()
const port = 4000
const path = require('path')

// middleware to access static file
app.use('/static', express.static('public'));

// set the template engine for pug
app.set("view engine", "pug")

// set the views directory
app.set('views', path.join(__dirname, 'views'));

// our pug demo endpoint
app.get('/demo', (req, res) => {
  res.render('demo', { title: 'Hey', message: 'Hello there!' });
})

app.get('/', (req, res) => {
  res.render('demo', { title: 'Hey', message: 'Hello there!' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})