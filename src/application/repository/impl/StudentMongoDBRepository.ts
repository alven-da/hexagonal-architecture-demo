import { Service } from 'typedi';

import { Student } from '#/application/domain/Student';
import { IStudentRepository } from '#/application/repository/IStudentRepository';
import { MongoDBBaseConnector } from '#/application/repository/api/MongoDBBaseConnector';

@Service({ transient: true })
export default class StudentMongoDBRepository extends IStudentRepository {
  getSource(): string {
    return 'MongoDB';
  }

  async getDetailsById(studentId: string): Promise<Student> {
    const instance = await MongoDBBaseConnector.getInstance();
    const db = instance.getDB();

    const studentEnt = await db
      .collection('students')
      .findOne({ id: studentId });

    return {
      id: studentEnt.id,
      address: studentEnt.address,
      firstName: studentEnt.firstName,
      lastName: studentEnt.lastName
    } as Student;
  }
}
