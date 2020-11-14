import express from 'express';
import { router } from './controller';

const app: express.Application = express();

const PORT = 8088;

// interface controller
app.use(router);

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`);
});