import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import express from 'express';
import http from 'http';
import cors from 'cors';

import StudentResolver from '#/interface/graphql/resolvers/StudentResolver';

import typeDefs from '#/interface/graphql/schemas/schema';

const PORT = process.env.PORT || 3000;

let server = null;

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);

  server = new ApolloServer({
    typeDefs,
    resolvers: [StudentResolver],
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });

  await server.start();

  app.use(
    '/',
    cors<cors.CorsRequest>(),
    express.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token })
    })
  );

  httpServer.listen({ port: PORT });

  console.log(`🚀 Server ready at http://localhost:${PORT}/`);
}

startServer();
