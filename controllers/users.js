const express = require('express')
const router = express.Router()
const User = require('../controllers/Users')

router.get('/users', (req, res) =>{
    return console.log('get method on user resource')
})

module.exports = router