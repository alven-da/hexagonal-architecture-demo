import express from 'express';
import RetrieveVideoDetailsByIdUseCase from '../modules/video/useCase/RetrieveVideoDetailsByIdUseCase';

const app: express.Application = express();

const BASE_PATH = '/api/v1';
const PORT = 8088;

// interface controller
// controller handles request and response's status code, body and headers
app.get(`${BASE_PATH}/video/:id`, async (req: express.Request, res: express.Response) => {
  const { params: { id } } = req;

  // calls the use case class
  const useCase = new RetrieveVideoDetailsByIdUseCase();
  const result = await useCase.execute({ id });

  return res.send(result);
});

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`);
});