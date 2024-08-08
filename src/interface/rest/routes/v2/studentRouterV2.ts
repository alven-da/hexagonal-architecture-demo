import { Router } from 'express';
import Container from 'typedi';
import StudentControllerV2 from '#/interface/rest/controllers/v2/StudentControllerV2';

const studentRouterV2 = Router();

const studentCtrl = Container.get(StudentControllerV2);

studentRouterV2.get('/:studentId', (req, res, next) =>
  studentCtrl.getById(req, res, next)
);

export default studentRouterV2;
