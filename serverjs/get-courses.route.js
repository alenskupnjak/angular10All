// import { Request, Response } from 'express';
const COURSES = require("./db-data");
// import { COURSES } from './db-data';
const colors = require("colors");

exports.getAllCourses = (req, res) => {
  console.log("Object.values(COURSES)", colors.green(Object.values(COURSES)));
  res.status(200).json({ payload: Object.values(COURSES) });
};

//
exports.getCourseById = (req, res) => {
  const courseId = req.params["id"];

  const courses = Object.values(COURSES);

  const course = courses.find((course) => course.id == courseId);

  res.status(200).json(course);
};
