// Script that reuses the same use case from http endpoint

import fs from 'fs';
import path from 'path';
import GetVideoDetailsByIdUseCase from '../useCase/GetVideoDetailsByIdUseCase';

async function run() {
  const cmdArgs = process.argv.slice(2);
  const videoId = cmdArgs[0] || 'default';

  console.info(`videoId is ${videoId}`);

  const videoDetailsUseCase = new GetVideoDetailsByIdUseCase();
  const result = await videoDetailsUseCase.execute({ id: videoId });

  const fileDir = path.join(__dirname, '..', '..', 'videoDetails.txt');
    
  fs.writeFileSync(fileDir, JSON.stringify(result));
}

run();