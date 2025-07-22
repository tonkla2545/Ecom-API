const express = require('express')
const router = express.Router()

const { authCheck, adminCheck } = require("../middlewares/authCheck");
const { changOrderStatus, getOrderStatus } = require('../controllers/admin');


router.put('/admin/order-status',authCheck,changOrderStatus)
router.get('/admin/orders',authCheck,getOrderStatus)

module.exports = router