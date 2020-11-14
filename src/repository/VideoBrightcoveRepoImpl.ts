import Video from '../domain/Video';
import VideoRepository from './VideoRepository';

import BrightcoveDS from '../dataSources/BrightCove';

export default class VideoBrightcoveRepoImpl implements VideoRepository {
    async getVideoDetailsById(id: string): Promise<Video> {
      const videoRaw = await BrightcoveDS.getVideoDetailsById(id);

      return this.toEntity(videoRaw);
    }

    async updateVideoDetails(video: Video): Promise<boolean> {
      const rawData = this.toPersistence(video);
      return BrightcoveDS.updateVideoDetails(rawData);
    }

    // Mappers

    private toEntity(rawData: any): Video {
      return Video.create({
        title: rawData.title,
        contentType: rawData.type,
        description: rawData.synopsis,
        reference: 'MySQL'
      }, rawData.id);
    }

    private toPersistence(entity: Video): any {
      return {
        id: entity.entityId,
        title: entity.title,
        synopsis: entity.description,
        type: entity.contentType
      };
    }
}