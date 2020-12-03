import JWPlayerDS from "../../infra/JWPlayer";
import Video from "../domain/Video";
import { IVideoRepository } from "./IVideoRepository";

export class VideoJWRepository implements IVideoRepository {
    getDetailsById(videoId: string): Video {
        const rawData = JWPlayerDS.retrieveVideoDetails(videoId);

        return new Video({
            contentType: rawData.kind,
            title: rawData.name,
            description: rawData.summary,
            reference: rawData.ref
        }, rawData.id);
    }

}