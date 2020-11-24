const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');  
const path = require('path');
const sass = require('node-sass');

const route = require('./routes/index.js');
const db = require('./config/db')

//connect db
db.connect();

const port = 3000;
const app = express();

console.log(__dirname);

app.use(express.static(path.join(__dirname, 'public')));

// Config extension for view
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
// Config view path
app.set('views', path.join(__dirname, 'resources', 'views'));

// Check request from client
app.use(morgan('combined'));

route(app);

app.listen(port, function(){
    console.log("application is running on port:" + port);
});