import { IVideoRepository } from "../repository/IVideoRepository";
import { VideoBrightcoveRepository } from "../repository/VideoBrightcoveRepo";
import { VideoJWRepository } from "../repository/VideoJWRepository";

// Data Transfer Object - what it should accept from User Interface (UI)
type DetailsRequestDTO = {
  videoId: string;
};

// Data Transfer Object - what it should return back to User Interface (UI)
type DetailsResponseDTO = {
  id: string;
  title: string;
  description: string;
  type: string;
  reference: string;
};

// implements the interface UseCase
// execute() is the entry point per use case
export class VideoDetailsUseCase {
  // implement repository instance here
  private _videoRepo: IVideoRepository;


  constructor() {
    // instantiate repository here
    this._videoRepo = new VideoJWRepository();
  }

  // entry point
  execute(args: DetailsRequestDTO): DetailsResponseDTO {
    const { videoId } = args;

    const result = this._videoRepo.getDetailsById(videoId);

    return {
      id: result.contentId,
      description: result.description,
      reference: result.reference,
      title: result.title,
      type: result.contentType
    };
  }
}