import express from "express";
import heathrow from "./data/Heathrow.json" assert {type:"json"};

const app = express();

app.get("/", (req, res) => {
  res.send('"/pharmacies": "returns an array of pharmacies in a specific area"')
});

app.listen(4173, () => {
  console.log(heathrow);
  console.log("Listening on http://localhost:4173.");
});

app.get("/api/v1/example", (req, res) => {
  res.status(200).json({ message: "Success" });
});
