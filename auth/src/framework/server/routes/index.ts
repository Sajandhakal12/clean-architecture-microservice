import authRouter from "./auth.route";
import userRouter from "./user.route";

export default function routes(app: any, express: any, redisClient: any) {
  app.use("/api/v1/auth", authRouter(express, redisClient));
  app.use("/api/v1/users", userRouter(express, redisClient));
}
