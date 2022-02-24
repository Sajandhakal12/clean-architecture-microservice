import expressRouter from "../expressRouter";

export default function authRouter(express: any, redisClient: any) {
  const router = expressRouter(express);
  // POST enpdpoints
  router.route("/login").post(() => console.log("authRouter"));
  router.route("/register").post(() => console.log("authRouter"));
  router.route("/forget-password").post(() => console.log("authRouter"));
  router.route("/reset-password").post(() => console.log("authRouter"));

  return router;
}
