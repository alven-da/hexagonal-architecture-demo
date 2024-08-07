import Entity from '../../abstract/Entity';

type IVideoProps = {
  title: string;
  description: string;
  contentType: string;
  reference: string;
};

export default class Video extends Entity<IVideoProps> {
  constructor(data: IVideoProps, id?: string) {
    super(data, id);
  }

  get contentId(): string {
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

  get reference(): string {
    return this.props.reference;
  }
}
