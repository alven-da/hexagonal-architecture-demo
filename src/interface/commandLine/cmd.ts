import fs from 'fs';
import path from 'path';
import { VideoDetailsUseCase } from '../../application/useCase/StudentService';

async function run() {
  // get command line arguments
  const cmdArgs = process.argv.slice(2);

  // get the videoId from the arguments
  const id = cmdArgs[0] || '';

  console.info(`videoId is ${id}`);

  const useCase = new VideoDetailsUseCase();
  const result = useCase.execute({ videoId: id });

  /** Save the result into a text file */
  const fileDir = path.join(__dirname, '..', '..', 'videoDetails.txt');
  fs.writeFileSync(fileDir, JSON.stringify(result));
}

run();
