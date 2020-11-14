import Video from '../domain/Video';
import VideoRepository from './VideoRepository';

import JWPlayerDS from '../dataSources/JWPlayer';

export default class VideoJWPlayerRepoImpl implements VideoRepository {
    async getVideoDetailsById(id: string): Promise<Video> {
      const videoRaw = await JWPlayerDS.retrieveVideoDetails(id);

      return this.toEntity(videoRaw);
    }

    async updateVideoDetails(video: Video): Promise<boolean> {
      const rawData = this.toPersistence(video);
      return JWPlayerDS.postVideoDetails(rawData);
    }

    // Mappers

    private toEntity(rawData: any): Video {
      return Video.create({
        title: rawData.name,
        contentType: rawData.kind,
        description: rawData.summary,
        reference: 'NoSQL'
      }, rawData.id);
    }

    private toPersistence(entity: Video): any {
      return {
        id: entity.entityId,
        name: entity.title,
        summary: entity.description,
        kind: entity.contentType
      };
    }
}