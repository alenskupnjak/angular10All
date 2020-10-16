import { Request, Response } from 'express';
import { COURSES } from './db-data';
const colors = require('colors');

export function getAllCourses(req: Request, res: Response) {

  console.log('Object.values(COURSES)',colors.green(Object.values(COURSES)));
  res.status(200).json({ payload: Object.values(COURSES) });
}

//
export function getCourseById(req: Request, res: Response) {
  const courseId = req.params['id'];

  const courses: any = Object.values(COURSES);

  const course = courses.find((course) => course.id == courseId);

  res.status(200).json(course);
}
