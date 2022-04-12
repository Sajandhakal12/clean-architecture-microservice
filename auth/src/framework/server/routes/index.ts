import authRouter from "./auth.route";
import userRouter from "./user.route";
import expressRouter from "../expressRouter";

export default function routes(app: any, express: any, redisClient: any) {
  const router = expressRouter(express);

  app.use("/v1/auth", authRouter(router, redisClient));
  app.use("/v1/users", userRouter(router, redisClient));
}
