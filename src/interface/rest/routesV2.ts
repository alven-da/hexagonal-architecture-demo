import { Express } from 'express';

import studentRouterV2 from '#/interface/rest/routes/v2/studentRouterV2';

export default async function (app: Express, path: string) {
  app.use(`${path}/student`, studentRouterV2);
}
