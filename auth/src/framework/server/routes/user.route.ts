import expressRouter from "../expressRouter";

export default function userRouter(express: any, redisClient: any) {
  const router = expressRouter(express);

  // POST enpdpoints
  router
    .route("/")
    .post(() => console.log("userRouter"))
    .get(() => console.log("userRouter"));
  router
    .route("/:id")
    .patch(() => console.log("userRouter"))
    .put(() => console.log("userRouter"));

  return router;
}
