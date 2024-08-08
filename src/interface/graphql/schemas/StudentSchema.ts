import { gql } from 'graphql-tag';

export const StudentTypeDefs = gql`
  type Student {
    studentId: String
    firstName: String
    lastName: String
  }

  type Query {
    getStudent(studentId: String): Student
  }
`;
