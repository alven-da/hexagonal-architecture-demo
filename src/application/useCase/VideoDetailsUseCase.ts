import UseCase from "../../abstract/UseCase";
import { IVideoRepository } from "../repository/IVideoRepository";
import { VideoBrightcoveRepository } from "../repository/VideoBrightcoveRepository";
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
export class VideoDetailsUseCase implements UseCase<DetailsRequestDTO, DetailsResponseDTO> {
  // implement repository instance here

  constructor() {
    // instantiate repository here
  }

  execute(args: DetailsRequestDTO): DetailsResponseDTO {
    throw new Error('Method not implemented.');
  }
}