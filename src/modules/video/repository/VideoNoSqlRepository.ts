import Video from '../domain/Video';
import VideoRepository from './VideoRepository';

import VideoNoSql from '../dataSources/VideoNoSql';

export default class VideoNoSqlRepository implements VideoRepository {
    async getVideoDetailsById(id: string): Promise<Video> {
      const videoRaw = await VideoNoSql.retrieveVideoDetails(id);

      return this.toEntity(videoRaw);
    }

    async updateVideoDetails(video: Video): Promise<boolean> {
      const rawData = this.toPersistence(video);
      return VideoNoSql.postVideoDetails(rawData);
    }

    // Mappers

    private toEntity(rawData: any): Video {
      return Video.create({
        title: rawData.name,
        contentType: rawData.kind,
        description: rawData.summary
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