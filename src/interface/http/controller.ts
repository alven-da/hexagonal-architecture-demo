import express from 'express';
import { VideoDetailsUseCase } from '../../application/useCase/VideoDetailsUseCase';

const router = express.Router();

// REST Controller
router.get('/api/v1/video/:id', async (req, res) => {
});


export { router };