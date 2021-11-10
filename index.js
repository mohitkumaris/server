const express = require("express"); // This is common js module way
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);
