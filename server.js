const express = require('express')
const app = express()
const morgan = require('morgan')
const {readdirSync } = require('fs')
const cors = require('cors')

// const authRouter = require("./routes/auth")
// const categoryRouter = require("./routes/category")

//middleware
app.use(morgan('tiny'))
app.use(express.json({limit:'20mb'})) //อ่าน JSON
app.use(cors())

// app.use('/api',authRouter)
// app.use('/api',categoryRouter)
readdirSync('./routes').map((item)=> 
    app.use('/api',require('./routes/'+item))) // map is loop


// Router
// app.get('/api',(req,res)=>{
//     const { email } = req.body
//     console.log(email)
//     res.send('Test')
// })





app.listen(5000,()=> console.log("Server is runing"))