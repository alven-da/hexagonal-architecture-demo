import express from 'express';

const router = express.Router();

// REST Controller
router.get('/api/v1/video/:id', async (req, res) => {
  const { params } = req;

  // extracted the id from the request path params
  const { id } = params;
});

export { router };