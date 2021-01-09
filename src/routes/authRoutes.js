const express = require('express')

const router = express.Router()

router.post('/signup', (req, res) => {
    res.send("Connected to Router")
})

module.exports = router