import { Student } from '#/application/domain/Student';
import { IStudentRepository } from '#/application/repository/IStudentRepository';
import { Service } from 'typedi';

@Service({ transient: true })
export default class StudentMongoDBRepository extends IStudentRepository {
  getSource(): string {
    return 'MongoDB';
  }

  async getDetailsById(studentId: string): Promise<Student> {
    return {
      id: studentId,
      address: 'North Point, Eastern District, Hong Kong Island',
      firstName: 'Alven',
      lastName: 'Alinan'
    } as Student;
  }
}
