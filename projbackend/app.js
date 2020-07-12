require('dotenv').config()

const mongoose = require('mongoose')
const chalk = require('chalk')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const authRoutes = require('./routes/auth')


// DB CONNECTION
mongoose.connect( process.env.DATABASE, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
 }).then(() =>{
   console.log(chalk.greenBright.inverse("DB CONNECTED"))
 }).catch(
   console.log(chalk.red(`DB GOT OOOPS!`))
 )


// MIDDLEWARE
 app.use(bodyParser.json())
 app.use(cookieParser())
 app.use(cors())

 //ROUTES
 app.use("/api", authRoutes)


 //PORT
const port = process.env.PORT || 8000

//STARTING A SERVER
app.listen(port, () => {
  console.log(chalk.magentaBright(`App is running at ${ port }`))
})
