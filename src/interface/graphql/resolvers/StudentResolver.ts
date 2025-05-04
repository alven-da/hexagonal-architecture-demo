import 'reflect-metadata';

import { ApolloError } from 'apollo-server-express';
import Container from 'typedi';

import { StudentService } from '#/application/useCase/StudentService';
import StudentMySQLRepository from '#/application/repository/impl/StudentMySQLRepository';
import StudentMongoDBRepository from '#/application/repository/impl/StudentMongoDBRepository';

const StudentResolver = {
  Query: {
    getStudent: async (_: any, args: any) => {
      try {
        const { studentId } = args;

        // interchange both Student repositories to test
        const studentRepo = Container.get(StudentMySQLRepository);
        const svc = new StudentService(studentRepo);

        const { id, firstName, lastName, source } =
          await svc.getById(studentId);

        return {
          studentId: id,
          firstName,
          lastName,
          source
        };
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};

export default StudentResolver;
