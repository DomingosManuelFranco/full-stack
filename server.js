if(process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const authorRouther = require('./routes/authors');
const bookRouter = require('./routes/books');
