export default function authRouter(router: any, redisClient: any) {
  // POST enpdpoints
  router
    .route("/login")
    .post((req: any, res: any) => res.send("POST /auth/login"));
  router.route("/register").post((req: any, res: any) => {
    console.log("reached");
    res.send(" POST /auth/register");
  });
  router
    .route("/forget-password")
    .post((req: any, res: any) => res.send("  POST /auth/forget-password"));
  router
    .route("/reset-password")
    .post((req: any, res: any) => res.send(" POST /auth/reset-password"));

  return router;
}
