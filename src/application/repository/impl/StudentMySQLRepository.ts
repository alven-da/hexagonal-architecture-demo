import { Student } from '#/application/domain/Student';
import { IStudentRepository } from '#/application/repository/IStudentRepository';
import { Service } from 'typedi';
import { MySQLBaseConnector } from '#/application/repository/api/MySQLBaseConnector';

@Service({ transient: true })
export default class StudentMySQLRepository extends IStudentRepository {
  getSource(): string {
    return 'MySQL Database';
  }

  async getDetailsById(studentId: string): Promise<Student> {
    const mysqlInstance = MySQLBaseConnector.getInstance();
    const db = mysqlInstance.getConnection();

    const [result] = await db
      .table('student')
      .select('id', 'address', 'first_name', 'last_name')
      .where('id', studentId);

    if (!result) {
      return {} as Student;
    }

    return {
      id: result.id,
      address: result.address,
      firstName: result.first_name,
      lastName: result.last_name
    } as Student;
  }
}
