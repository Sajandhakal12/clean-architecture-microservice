import express from "express";
const { Pool } = require("pg");
// import redis from "redis";
import config from "./config";
import expressConfig from "./framework/server/express";
// import routes from "./frameworks/webserver/routes";
import serverConfig from "./framework/server/server";
import connectToPostgres from "./framework/database/postgres/connection";
// import redisConnection from "./frameworks/database/redis/connection";

// middlewares
// import errorHandlingMiddleware from "./frameworks/webserver/middlewares/errorHandlingMiddleware";

const app = express();

// express.js configuration (middlewares etc.)
expressConfig(app);

app.get("/api", (req, res) => {
  //   res.set("Server", "Express");
  res.send("Hello World!");
});

// routes for each endpoint
// routes(app, express, redisClient);

// error handling middleware
// app.use(errorHandlingMiddleware);

// connect to postgres database
connectToPostgres(Pool, config.postgres);

console.log(config);

// const redisClient = redisConnection(redis, config).createRedisClient();

// server configuration and start
serverConfig(app, config).startServer();
