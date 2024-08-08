import { Router } from 'express';
import Container from 'typedi';

import StudentControllerV1 from '#/interface/rest/controllers/v1/StudentControllerV1';

const studentRouterV1 = Router();

const studentCtrl = Container.get(StudentControllerV1);

studentRouterV1.get('/:studentId', (req, res, next) =>
  studentCtrl.getById(req, res, next)
);

export default studentRouterV1;
