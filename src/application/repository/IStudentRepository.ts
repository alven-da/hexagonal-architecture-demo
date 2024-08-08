import { Student } from '#/application/domain/Student';

export abstract class IStudentRepository {
  abstract getSource(): string;
  abstract getDetailsById(studentId: string): Promise<Student>;
}
