const mongoose = require('mongoose')
const chalk = require('chalk')
const express = require('express')
const app = express()

// mongoose.connect('mongodb://localhost:27017/myapp', 
//   {useNewUrlParser: true}
// )

mongoose.connect('mongodb://localhost:27017/tshirt', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
 }).then(() =>{
   console.log(chalk.greenBright.inverse("DB CONNECTED"))
 })


const port = 8000

app.listen(port, () => {
  console.log(chalk.magentaBright(`App is running at ${ port }`))
})
