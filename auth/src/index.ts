import express from "express";
import { Pool } from "pg";
// import redis from "redis";
import config from "./config";
import expressConfig from "./framework/server/express";
import routes from "./framework/server/routes";
import serverConfig from "./framework/server/server";
import connectToPostgres from "./framework/database/postgres/connection";
// import redisConnection from "./frameworks/database/redis/connection";

// middlewares
// import errorHandlingMiddleware from "./frameworks/webserver/middlewares/errorHandlingMiddleware";

const app = express();

// express.js configuration (middlewares etc.)
expressConfig(app);

// routes for each endpoint
routes(app, express, {});

// error handling middleware
// app.use(errorHandlingMiddleware);

// connect to postgres database
const postgresClient = connectToPostgres(Pool, config.postgres);

// const redisClient = redisConnection(redis, config).createRedisClient();

// server configuration and start
serverConfig(app, config).startServer();
