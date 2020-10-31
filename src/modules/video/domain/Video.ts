import Entity from '../../../core/Entity';

interface IVideoProps {
  title: string;
  description: string;
  contentType: string;  
}

export default class Video extends Entity<IVideoProps> {
  private constructor(data: IVideoProps, id: string) {
    super(data, id);
  }

  static create(props: IVideoProps, id: string) {
    const entity = new Video(props, id);

    // there might be some validations you need to add here

    return entity;
  }

  get entityId(): string {
    return this.id;
  }

  get title(): string {
    return this.props.title;
  }

  get description(): string {
    return this.props.description;
  }

  get contentType(): string {
    return this.props.contentType;
  }
}