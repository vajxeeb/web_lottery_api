
const express = require('express')
const router = express.Router()
const unit = require('../controllers/unit.controller')

router.post('/unit', unit.create)

module.exports = router