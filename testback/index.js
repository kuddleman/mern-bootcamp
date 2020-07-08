const express = require('express');

const app = express();

const port = 8000

const admin = ( request, response ) => {
  return response.send('Admin dashboard')
}

const isAdmin = ( request, response, next ) => {
  console.log("isAdmin is RUNNING")
  next()
}

const isLoggedIn = ( request, response, next ) => {
  console.log("isLoggedIn is RUNNING")
}

app.get('/', ( request, response ) => {
  return response.send('This is the HOME PAGE')
})

app.get('/admin', isLoggedIn, isAdmin, admin )

app.get('/login', ( request, response ) => {
  return response.send('you are visiting login route');
})

app.get('/signup', ( request, response ) => response.send('This is the SIGNUP route'))

app.get('/signout', ( request, response ) => {
   return response.send('You are signed out!')
   })

app.get('/hidesh', ( request, response ) => response.send('This is for Hidesh'))

app.listen(port, () => {
  console.log("Server is up and running...")
})

// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))