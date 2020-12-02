import fs from 'fs';
import path from 'path';
import { VideoDetailsUseCase } from '../../application/useCase/VideoDetailsUseCase';

async function run() {
  // get command line arguments
  const cmdArgs = process.argv.slice(2);

  // get the videoId from the arguments
  const id = cmdArgs[0] || '';

  console.info(`videoId is ${id}`);

  /** Save the result into a text file */
  // const fileDir = path.join(__dirname, '..', '..', 'videoDetails.txt');
  // fs.writeFileSync(fileDir, JSON.stringify(result));
}

run();