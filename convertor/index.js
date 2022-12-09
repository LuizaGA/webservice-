const express = require("express");
const cors = require("cors");
const database = require("./src/database/index.js");

const app = express();
database();
const port = 5000;

app.use(express.json());
app.use(cors());

app.all('*', require("./src/routes/index.js"));

app.get("/", (req, res) => {
  return res.send("Conectado");
});

app.listen(port, () => {
  console.log(`Serviço online em http://localhost:${port}`);
});