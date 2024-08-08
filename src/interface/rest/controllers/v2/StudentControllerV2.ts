import { NextFunction, Request, Response } from 'express';
import Container, { Service } from 'typedi';

import { StudentService } from '#/application/useCase/StudentService';

import StudentMongoDBRepository from '#/application/repository/impl/StudentMongoDBRepository';

@Service({ transient: true })
export default class StudentControllerV2 {
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { studentId } = req.params;
      const studentRepo = Container.get(StudentMongoDBRepository);
      const studentService = new StudentService(studentRepo);

      const studentInfo = await studentService.getById(studentId);

      res.json(studentInfo);

      return;
    } catch (error) {
      next(error);
    }
  }
}
