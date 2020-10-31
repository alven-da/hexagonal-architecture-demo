import Video from '../domain/Video';
import VideoRepository from './VideoRepository';

import VideoMySql from '../dataSources/videoMySql';

export default class VideoMySqlRepository implements VideoRepository {
    async getVideoDetailsById(id: string): Promise<Video> {
      const videoRaw = await VideoMySql.getVideoDetailsById(id);

      return this.toEntity(videoRaw);
    }

    async updateVideoDetails(video: Video): Promise<boolean> {
      const rawData = this.toPersistence(video);
      return VideoMySql.updateVideoDetails(rawData);
    }

    // Mappers

    private toEntity(rawData: any): Video {
      return Video.create({
        title: rawData.title,
        contentType: rawData.type,
        description: rawData.synopsis
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