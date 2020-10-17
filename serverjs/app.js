// import * as express from 'express';
const express = require('express');
// var morgan = require('morgan');
const morgan = require('morgan');
// import { Application } from 'express';
const getAllCourses = require('./get-courses.route')
const bodyParser = require('body-parser');
const getCourseById = require('./get-courses.route')
// import { getAllCourses, getCourseById } from './get-courses.route';
const searchLessons = require('./search-lessons.route')
// import { searchLessons } from './search-lessons.route';

const appRouter = require('./approuter');


const colors = require('colors');

const app = express();

app.use(morgan('dev'));

// SETUP Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS,GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json())

console.log('START START START');

// app.route('/api/courses').get(getAllCourses);
// app.use('/api/courses').get(getAllCourses);

// app.route('/api/courses/:id').get(getCourseById);

// app.route('/api/lessons').get(searchLessons);

// Mount routers
app.use('/courses', appRouter);

// definiranje porta
const PORT = process.env.PORT || 3001;

const httpServer = app.listen(PORT, () => {
  console.log('port=', httpServer.address().port);

  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
