export default interface UseCase<T, U> {
  execute(dto: T): U;
}
