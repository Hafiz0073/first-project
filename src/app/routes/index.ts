import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { studentRoutes } from '../modules/student/student.route';
import { academicSemesterRoutes } from '../modules/academicSemester/academicsemester.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
