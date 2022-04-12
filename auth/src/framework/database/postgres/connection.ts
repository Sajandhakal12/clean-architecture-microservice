export default function connectToPostgres(Pool: any, config: any) {
  const pgClient = new Pool(config);
  pgClient.on("error", () => console.log("Lost PG connection"));
  pgClient
    .query(
      `CREATE TABLE IF NOT EXISTS users (
        id INT primary key,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )`
    )
    .catch((err: Error) => console.log(err));

  return {
    pgClient,
  };
}
