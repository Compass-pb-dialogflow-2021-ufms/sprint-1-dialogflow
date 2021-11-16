import express from "express";
import path from "path";
import * as weatherForecast from "./weatherForecast.js";
const app = express();
const router = express.Router();
const __dirname = path.resolve();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/obterClima", async function (req, res) {
  const response = await weatherForecast.obterClima(req.query.local);
  res.send(response);
});

app.use("/", router);
app.listen(process.env.PORT || 3000);

console.log(`Running at Port ${process.env.PORT || 3000}`);
