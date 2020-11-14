import UseCase from "../../abstract/UseCase";

// Data Transfer Object - what it should accept from interface
type DetailsRequestDTO = {
  id: string;
};

// Data Transfer Object - what it should return back to interface
type DetailsResponseDTO = {
  id: string;
  title: string;
  description: string;
  type: string;
  reference: string;
};

export class VideoDetailsUseCase implements UseCase<DetailsRequestDTO, DetailsResponseDTO> {
    constructor() {
    }

    async execute(args: DetailsRequestDTO): Promise<DetailsResponseDTO> {
        throw new Error('Not yet implemented');
    }
}