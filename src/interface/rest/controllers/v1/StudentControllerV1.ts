import { NextFunction, Request, Response } from 'express';
import Container, { Service } from 'typedi';
import StudentMySQLRepository from '#/application/repository/impl/StudentMySQLRepository';
import { StudentService } from '#/application/useCase/StudentService';

@Service({ transient: true })
export default class StudentControllerV1 {
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { studentId } = req.params;
      const studentRepo = Container.get(StudentMySQLRepository);
      const studentService = new StudentService(studentRepo);

      const studentInfo = await studentService.getById(studentId);

      res.json(studentInfo);

      return;
    } catch (error) {
      next(error);
    }
  }
}
