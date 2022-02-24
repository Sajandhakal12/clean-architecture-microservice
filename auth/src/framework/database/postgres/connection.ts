export default function connectToPostgres(Pool: any, config: any) {
  const pgClient = new Pool(config);
  pgClient.on("error", () => console.log("Lost PG connection"));
  pgClient
    .query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch((err: Error) => console.log(err));

  return {
    pgClient,
  };
}
