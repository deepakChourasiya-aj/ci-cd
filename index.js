const express = require("express");

const app = express();

app.get("/", () => {
  res.send({ msg: "welcome to cicd-class" });
});

app.listen(4000, () => {
  console.log("listening at port 4000");
});
