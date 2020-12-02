export default interface UseCase<Accepts, Returns> {
  execute(args: Accepts): Returns;
}
