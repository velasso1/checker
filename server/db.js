const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "16psjvYpp",
  host: "db",
  port: 5432,
  database: "adjunct-results-db",
});

module.exports = pool;
