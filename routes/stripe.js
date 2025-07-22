const express = require('express')
const router = express.Router()
const { authCheck, adminCheck } = require("../middlewares/authCheck");
const { payment } = require('../controllers/stripe.js')

router.post('/user/create-payment-intent',authCheck,payment)


module.exports = router