const express = require('express');
const router = express.Router();
var app = express() ;
const expressEjsLayouts = require('express-ejs-layouts');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var session = require("express-session");
var flash = require("connect-flash");
// var cors = require('cors');
app.use(bodyParser.json());

require("dotenv/config");

const {
    CategoriesRoute,
    RealEstateRoute,
    UsersRoute,
    UtilitiesRoute
} = require ('./src/routes/admin/index') 

const {
    categoriesApiRoute,
    realEstateApiRoute,
    utilitiesApiRoute
} = require('./src/routes/default/index')

app.use(bodyParser.urlencoded({ extended: true }))
const authRoute = require('./src/routes/auth')
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000},
    resave:false,
    saveUninitialized:false
}));

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    next();
  });
  


app.use(flash());

//ejs
const path = require('path')
app.set('views', path.join(__dirname, '/src/views'))
app.set("view engine","ejs");

app.set("layout","./src/views/layouts/layout");


//routes Admin
app.use('/admin/utilities', UtilitiesRoute)
app.use('/admin/categories', CategoriesRoute)
app.use('/admin/real-estate', RealEstateRoute)
//app.use('/user', UsersRoute);

app.use('/', authRoute);

//routes API
app.use('/categories', categoriesApiRoute);
app.use('/utilities', utilitiesApiRoute);
app.use('/real-estate', realEstateApiRoute);


mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
    () => {
      console.log("connect to DB");
    }
);

app.listen(8080, () => {
    console.log('Listen to port 8080')
})