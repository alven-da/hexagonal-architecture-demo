import { Express } from 'express';

import studentRouterV1 from '#/interface/rest/routes/v1/studentRouterV1';

export default async function (app: Express, path: string) {
  app.use(`${path}/student`, studentRouterV1);
}
