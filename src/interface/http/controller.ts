import express from 'express';
import { VideoDetailsUseCase } from '../../application/useCase/VideoDetailsUseCase';

const router = express.Router();

// REST Controller
router.get('/api/v1/video/:id', (req, res) => {
  const { params } = req;

  // extracted the id from the request path params
  const { id } = params;
  res.send(null);
});

export { router };