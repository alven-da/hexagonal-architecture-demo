import { IStudentRepository } from '#/application/repository/IStudentRepository';
import { Service } from 'typedi';

export type StudentDto = {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  source?: string;
};

@Service({ transient: true })
export class StudentService {
  constructor(private studentRepo: IStudentRepository) {}

  async getById(studentId: string): Promise<StudentDto> {
    const {
      id,
      firstName,
      address,
      lastName,
      guardian,
      primaryEducation,
      secondaryEducation
    } = await this.studentRepo.getDetailsById(studentId);

    return {
      id,
      firstName,
      lastName,
      address,
      source: this.studentRepo.getSource()
    } as StudentDto;
  }
}
