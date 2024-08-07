import { v4 as uuidv4 } from 'uuid';

export default abstract class Entity<T> {
  protected id: string;
  protected props: T;

  constructor(props: T, id?: string) {
    this.id = id || uuidv4();
    this.props = props;
  }
}
