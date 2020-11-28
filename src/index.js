const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const dataInfo = require("./data");

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { connection } = require("./connector");

const dataArray = dataInfo.data;
//console.log(dataInfo.data.length);
app.get("/totalRecovered", (req, res) => {
  let totalRecovered = 0;
  for (let i = 0; i < dataArray.length; i++) {
    totalRecovered = totalRecovered + dataArray[i].recovered;
  }
  res.status(200).json({ data: { _id: "total", recovered: totalRecovered } });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
