export default interface UseCase {
  execute(dto: any): Promise<any>;
} 