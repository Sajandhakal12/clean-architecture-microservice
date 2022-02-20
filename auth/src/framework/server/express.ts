import express from "express";
import cors from "cors";

export default function expressConfig(app: express.Application): void {
  app.use(express.json({ limit: "50mb" }));
  app.use(
    express.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 50000,
    })
  );
  app.use(cors());
}
