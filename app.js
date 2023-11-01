const express = require('express')
const logger = require('morgan')
const cors = require('cors');
const mongoose = require('mongoose');
const contactsRouter = require('./routes/api/contacts');

require('dotenv').config();

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ 
    status:'error',
    code:404,
    message: 'Not found' 
  })
})

app.use((err, req, res, next) => {
  res.status(500).json({ 
    status:'error',
    code:404,
    data: 'Not found', 
    message: err.message 
  })
})

const DB_HOST = process.env.DB_HOST;

const connection = mongoose.connect(DB_HOST)
connection
.then(console.log('Database connection successful'))
.catch(err => console.log(`server not responding:${err.message}`))

module.exports = app;
