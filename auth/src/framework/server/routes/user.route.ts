export default function userRouter(router: any, redisClient: any) {
  // POST enpdpoints
  router
    .route("/")
    .post((req: any, res: any) => res.send("POST /user"))
    .get((req: any, res: any) => res.send("GET /user"));
  router
    .route("/:id")
    .patch((req: any, res: any) => res.send("PATCH /user/:id"))
    .put((req: any, res: any) => res.send("PUT /user/:id"));

  return router;
}
