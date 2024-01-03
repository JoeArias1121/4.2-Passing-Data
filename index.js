import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let name = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  name = req.body.fName;
  name = name+req.body.lName;
  res.render("index.ejs", { Name: name})
  console.log(name)
  console.log(req.body['fName'])
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
