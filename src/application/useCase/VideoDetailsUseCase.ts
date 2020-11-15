import UseCase from "../../abstract/UseCase";

// Data Transfer Object - what it should accept from User Interface (UI)
type DetailsRequestDTO = {
  id: string;
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
  constructor() {}

  async execute(args: DetailsRequestDTO): Promise<DetailsResponseDTO> {
    throw new Error('Method not implemented.');
  }
}