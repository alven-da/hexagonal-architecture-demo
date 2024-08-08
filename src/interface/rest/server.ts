import express, { Express, Response, NextFunction } from 'express';
import cors from 'cors';
import http from 'http';

import { serverSettings } from '#/common/config';

import routesV1 from '#/interface/rest/routesV1';
import routesV2 from '#/interface/rest/routesV2';

import { StatusCodes, StatusMessage } from '#/common/constants';
import { createErrorResponse } from '#/common/utils';

const { port } = serverSettings;

export default class ExpressServer {
  private app: Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = port;
    this.setupMiddleware();
  }

  private async setupMiddleware(): Promise<void> {
    this.app.use((_, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'X-Requested-With, ntindicate'
      );
      res.header('Access-Control-Expose-Headers', 'ntindicate');
      res.header('X-Frame-Options', 'DENY');
      res.header('Content-Security-Policy', "frame-ancestors 'none'");

      next();
    });

    this.app.use(cors());
    this.app.use(express.json());

    this.app.get('/', (_, res) => {
      res.set('Content-Type', 'text/html');
      res.send(Buffer.from('<h1>It works</h1>'));
    });

    routesV1(this.app, '/v1');
    routesV2(this.app, '/v2');

    // Fallback route
    this.app.use((_, res) => {
      res
        .status(StatusCodes.NotFound)
        .send(
          createErrorResponse(
            StatusCodes.NotFound,
            StatusMessage.NotFound,
            'Resource Cannot Be Found'
          )
        );
    });
  }

  start(): void {
    http.createServer(this.app).listen(this.port);

    console.log(
      `Server is now listening at port ${this.port} - process id ${process.pid}`
    );
  }
}
