const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req,res) => {
    let val = 90000;
  res.send({ msg: "welcome to cicd-example ",val });
});

app.listen(4000, () => {
  console.log("listening at port 4000");
});
