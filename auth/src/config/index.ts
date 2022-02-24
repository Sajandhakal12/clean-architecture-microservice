export default {
  port: process.env.PORT || 5000,
  ip: process.env.HOST || "0.0.0.0",
  postgres: {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  },

  redis: {
    uri: process.env.REDIS_URL || "redis://localhost:6379",
  },
  jwtSecret: process.env.JWT_SECRET || "jkl!±@£!@ghj1237",
};
