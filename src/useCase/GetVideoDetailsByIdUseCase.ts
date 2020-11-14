import UseCase from '../core/UseCase';

import VideoRepository from '../repository/VideoRepository';
import VideoBrightcoveRepoImpl from '../repository/VideoBrightcoveRepoImpl';
import VideoJWPlayerRepoImpl from '../repository/VideoJWPlayerRepoImpl';

interface VideoDetailsDTO {
  id: string;
  title: string;
  description: string;
  contentType: string;
  reference: string;
}

export default class GetVideoDetailsByIdUseCase implements UseCase {
  private _videoRepo: VideoRepository;

  constructor() {
    // this._videoRepo = new VideoMySqlRepository();
    this._videoRepo = new VideoJWPlayerRepoImpl();
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
      contentType: videoEntity.contentType,
      reference: videoEntity.reference
    };
  }
}