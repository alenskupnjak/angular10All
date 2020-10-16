import * as express from 'express';
var morgan = require('morgan');
import { Application } from 'express';
import { getAllCourses, getCourseById } from './get-courses.route';
import { searchLessons } from './search-lessons.route';

const app: Application = express();

app.use(morgan('dev'));

console.log('START START START');

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

const httpServer: any = app.listen(9000, () => {
  console.log('port=', httpServer.address().port);

  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
