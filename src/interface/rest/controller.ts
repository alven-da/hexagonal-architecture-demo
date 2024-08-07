import express from 'express';
import { VideoDetailsUseCase } from '../../application/useCase/GetStudentInfo';

const router = express.Router();

// REST Controller
router.get('/api/v1/video/:id', (req, res) => {
  const { params } = req;

  // extracted the id from the request path params
  const { id } = params;

  const useCase = new VideoDetailsUseCase();

  const result = useCase.execute({ videoId: id });

  res.send(result);
});

export { router };
