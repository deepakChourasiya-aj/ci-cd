const express = require("express");

const app = express();

app.get("/", () => {
    let val = 90000;
  res.send({ msg: "welcome to cicd-example " });
});

app.listen(4000, () => {
  console.log("listening at port 4000");
});
