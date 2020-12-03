import Video from "../domain/Video";

export interface IVideoRepository {
    getDetailsById(videoId: string): Video;
}