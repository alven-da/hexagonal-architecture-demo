import express from 'express';
import GetVideoDetailsByIdUseCase from '../../useCase/GetVideoDetailsByIdUseCase';

const router = express.Router();

router.get(`/api/v1/video/:id`, async (req: express.Request, res: express.Response) => {
  const { params: { id } } = req;

  const useCase = new GetVideoDetailsByIdUseCase();

  const result = await useCase.execute({ id });

  return res.send(result);
});

export { router };