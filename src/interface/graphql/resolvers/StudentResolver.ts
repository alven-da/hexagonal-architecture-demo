import 'reflect-metadata';

import { ApolloError } from 'apollo-server-express';
import Container from 'typedi';

import { StudentService } from '#/application/useCase/StudentService';
import StudentMySQLRepository from '#/application/repository/impl/StudentMySQLRepository';

const StudentResolver = {
  Query: {
    getStudent: async (_: any, args: any) => {
      try {
        const { studentId } = args;

        const studentRepo = Container.get(StudentMySQLRepository);
        const svc = new StudentService(studentRepo);

        const { id, firstName, lastName } = await svc.getById(studentId);

        return {
          studentId: id,
          firstName,
          lastName
        };
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};

export default StudentResolver;
