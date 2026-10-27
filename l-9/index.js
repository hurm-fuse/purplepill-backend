const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('this is my first app on express so i say to you Hello!')
})

app.get('/about', (req, res) => {
  res.send('Hello World from about page of my first app on express and you see this message using get request!')
})

// post 
app.post('/about', (req, res) => {
  res.send('Hello World from about page of my first app on express and you see this message using post request!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})