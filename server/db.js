const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "16psjvYpp",
	host: "localhost",
	port: 5432,
	database: "adjunct-results-db"
});

module.exports = pool;
