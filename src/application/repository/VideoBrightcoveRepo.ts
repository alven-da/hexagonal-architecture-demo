import BrightcoveDS from "../../infra/BrightCove";
import Video from "../domain/Video";
import { IVideoRepository } from "./IVideoRepository";


export class VideoBrightcoveRepository implements IVideoRepository {
    getDetailsById(videoId: string): Video {
        const rawData = BrightcoveDS.getVideoDetailsById(videoId);

        return new Video({
            title: rawData.title,
            description: rawData.synopsis,
            contentType: rawData.type,
            reference: rawData.ref
        }, rawData.id);
    }
}