import Video from '../domain/Video';

export default interface VideoRepository {
  getVideoDetailsById(id: string): Promise<Video>;
  updateVideoDetails(entity: Video): Promise<boolean>;
}