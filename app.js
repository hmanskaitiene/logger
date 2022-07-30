
const express = require('express')
const app = express()
const port = 3000

const {middleLogger,middleLoggerWarm} = require("./middleware/logger");

const exampleRoute = require("./routes/example");

app.use("/", middleLogger, exampleRoute);
app.use("*", middleLoggerWarm);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
