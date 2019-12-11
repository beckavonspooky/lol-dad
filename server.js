const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8000

app.get('/api/v1/hello', (req, res) =>{
    res.json({ message: 'world' })
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'))

})

app.listen(PORT, () =>{
    console.log(`Port is RUNNING ${PORT}`)
})