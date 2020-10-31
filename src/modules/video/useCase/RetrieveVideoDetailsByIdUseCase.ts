import UseCase from '../../../core/UseCase';

import VideoRepository from '../repository/VideoRepository';
import VideoMySqlRepository from '../repository/VideoMySqlRepository';
import VideoNoSqlRepository from '../repository/VideoNoSqlRepository';

interface VideoDetailsDTO {
  id: string;
  title: string;
  description: string;
  contentType: string;
}

export default class RetrieveVideoDetailsByIdUseCase implements UseCase {
  private _videoRepo: VideoRepository;

  constructor() {
    // this._videoRepo = new VideoMySqlRepository();
    this._videoRepo = new VideoNoSqlRepository();
  }

  async execute(requestObj: any): Promise<VideoDetailsDTO> {
    /**
     * Use case steps
     * 
     * 1. get the ID from the request object
     * 2. call the repository that retrieves video details from persistence
     * 3. return the necessary video details
     * 
     */

    const { id } = requestObj;

    const videoEntity = await this._videoRepo.getVideoDetailsById(id);

    return  {
      id: videoEntity.entityId,
      title: videoEntity.title,
      description: videoEntity.description,
      contentType: videoEntity.contentType
    };
  }
}