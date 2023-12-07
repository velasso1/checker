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
    const { personId, resCivil, resCrim, resPhil, resEng } = req.body;
    const newResult = await pool.query(
      "INSERT INTO adjunct_results VALUES($1, $2, $3, $4, $5)",
      [personId, resCivil, resCrim, resPhil, resEng]
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
    const { personId, resCivil, resCrim, resPhil, resEng } = req.body;
    const updateResult = await pool.query(
      "UPDATE adjunct_results SET person_id = $1, res_civil = $2, res_crim = $3, res_phil = $4, res_eng = $5 WHERE person_id = $6",
      [personId, resCivil, resCrim, resPhil, resEng, id]
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
  console.log(`Port is ${port}`);
});
