import express from "express";
import heathrow from "./data/Heathrow.json" assert { type: "json" };
import stratford from "./data/Stratford.json" assert { type: "json" };
import harrow from "./data/Harrow.json" assert { type: "json" };

const app = express();

app.get("/", (req, res) => {
  res.send(
    '{"/pharmacies": "returns an array of pharmacies in a specific area"}'
  );
});

app.get("/:city/:category", (req, res) => {
  let city = req.params.city;
  let category = req.params.category;

  if (city == "stratford") {
    res.send(stratford[category]);
  } else if (city == "harrow") {
    res.send(harrow[category]);
  } else if (city == "heathrow") {
    res.send(heathrow[category]);}
});

app.listen(4173, () => {
  // console.log(heathrow);
  console.log("Listening on http://localhost:4173.");
});

app.get("/api/v1/example", (req, res) => {
  res.status(200).json({ message: "Success" });
});
