import { Request, Response } from 'express';
import { LESSONS } from './db-data_brisi';
import { setTimeout } from 'timers';
const colors = require('colors');

export function searchLessons(req: Request, res: Response) {
  const queryParams = req.query;
  console.log(queryParams);


  const courseId = queryParams.courseId;
  const filter = queryParams.filter || '';
  const sortOrder = queryParams.sortOrder;
  const pageNumber = parseInt(queryParams.pageNumber) || 0;
  const pageSize = parseInt(queryParams.pageSize);

  let lessons = Object.values(LESSONS)
    .filter((lesson) => {
      return lesson.courseId == courseId;
    })
    .sort((l1, l2) => l1.id - l2.id);

  console.log('lessons 01=',...lessons);


  if (filter) {
    console.log('Sada i filter radi');

    lessons = lessons.filter((lesson) => {
      return (
        lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >=0
      );
    });
  }


  console.log('lessons poslije fitera =',colors.red(...lessons));

  if (sortOrder == 'desc') {
    lessons = lessons.reverse();
  }

  const initialPos = pageNumber * pageSize;

  console.log('initialPos=',initialPos);


  const lessonsPage = lessons.slice(initialPos, initialPos + pageSize);

  console.log('lessonsPage=',lessonsPage);


  setTimeout(() => {
    res.status(200).json({
      payload: lessonsPage,
      mojdata:'moj data' });
  }, 1000);
}
