const express= require('express');
const app= express();
const port= process.env.PORT||5000;
const exhbs= require("express-handlebars");
const bodyParser= require('body-parser')
const multer= require('multer')
const path= require('path')
const request= require('request')
require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const imageRoute= require('./route/imageRoute')
const sendSms = require('./twilioclient');

//setting the templating engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
//middlewares
app.use('router')
//Middleware for error handling
app.use(req, res=>{
    const error= new Error('Not found in the server');
error.status(404);
next('error')
})

//express middleware
app.use(session({
    secret: process.env.RANDOM_SECRET_WORD,
    resave: true,
    saveUninitialized: false
}))

//route for creating user(s) endpoint
app.post('/users', (req, res)=>{
    const users= new user({
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
    })

const welcomeMessage = 'Welcome to Sir/ma! Your verification code is 58876';

  sendSms(user.phone, welcomeMessage);


    userDatabase.push(user)
   return res.status(200).send({
        message: 'Account created successfully check you phone verify you account',
        data: users
    })
})
app.use(error, req, res, next=>{
    res.status(error.status||500)
    res.json({
        error: {
            message: error.message
        }
    })
})

//express middleware
app.use(session({
    secret: process.env.RANDOM_SECRET_WORD,
    resave: true,
    saveUninitialized: false
}))

app.use(express.static("public/images"));

app.get('/', (req, res)=>{
    res.send({message: 'Hey here'})
})


app.listen(port, (req, res) => {
    console.log(`App is listening on ${Port}`);
  });

module.export= app;