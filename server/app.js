const express = require("express");
const pool = require("./db");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

// routes

// create a result
app.post("/create", async (req, res) => {
	try {
		const { firstName, secondName, lastName, resCivil, resCrim, resPhil } =
			req.body;
		const newResult = await pool.query(
			"INSERT INTO adjunct_results VALUES($1, $2, $3, $4, $5, $6)",
			[firstName, secondName, lastName, resCivil, resCrim, resPhil]
		);

		res.json(newResult.rows);
		res.sendStatus(200);
	} catch (err) {
		console.error(err.message);
	}
});

// get all results
app.get("/allres", async (req, res) => {
	try {
		const getAllResults = await pool.query("SELECT * FROM adjunct_results");

		res.json(getAllResults.rows);
	} catch (err) {
		console.error(err.message);
	}
});

// update a result
app.put("/update/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { firstName, secondName, lastName, resCivil, resCrim, resPhil } =
			req.body;
		const updateResult = await pool.query(
			"UPDATE adjunct_results SET first_name = $1, second_name = $2, last_name = $3, res_civil = $4, res_crim = $5, res_phil = $6 WHERE person_id = $7",
			[firstName, secondName, lastName, resCivil, resCrim, resPhil, id]
		);

		res.json("UPDATED");
	} catch (err) {
		console.error(err.message);
	}
});

// get current result
app.get("/current/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const getCurrentRes = await pool.query(
			"SELECT * FROM adjunct_results WHERE person_id = $1",
			[id]
		);

		res.json(getCurrentRes.rows);
	} catch (err) {
		console.error(err.message);
	}
});

// delete a result
app.delete("/delete/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteResult = await pool.query(
			"DELETE FROM adjunct_results WHERE person_id = $1",
			[id]
		);

		res.json(deleteResult.rows);
	} catch (err) {
		console.error(err.message);
	}
});

app.get("/", (req, resp) => {
	resp.send("server is avialable");
});

app.listen(port, () => {
	console.log(`This is a server side, and your port is ${port}`);
});
