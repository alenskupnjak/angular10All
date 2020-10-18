import * as express from 'express';
var morgan = require('morgan');
import { Application } from 'express';
import { getAllCourses, getCourseById } from './get-courses.route';
import { searchLessons } from './search-lessons.route';

const colors = require('colors');

const app: Application = express();

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

console.log('START START START');

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

const httpServer: any = app.listen(3001, () => {
  console.log('port=', httpServer.address().port);

  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
