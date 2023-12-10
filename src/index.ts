import NetworkCard from "./NetworkCard";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");

  console.log("testing");
  const test = new NetworkCard();
  console.log(test);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
