export default function serverConfig(app: any, config: any) {
  return {
    startServer: () => {
      app.listen(config.port, () => {
        console.log(
          "Express server listening on %d, in %s mode",
          config.port,
          app.get("env")
        );
      });
    },
  };
}
