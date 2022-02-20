import express from "express";
// import redis from "redis";
import config from "./config";
import expressConfig from "./framework/server/express";
// import routes from "./frameworks/webserver/routes";
import serverConfig from "./framework/server/server";
// import redisConnection from "./frameworks/database/redis/connection";

// middlewares
// import errorHandlingMiddleware from "./frameworks/webserver/middlewares/errorHandlingMiddleware";

const app = express();

// express.js configuration (middlewares etc.)
expressConfig(app);

app.get("/api", (req, res) => {
  res.send("success");
});

// routes for each endpoint
// routes(app, express, redisClient);

// server configuration and start
serverConfig(app, config).startServer();

// const redisClient = redisConnection(redis, config).createRedisClient();

// error handling middleware
// app.use(errorHandlingMiddleware);
