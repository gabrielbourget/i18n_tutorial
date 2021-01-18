const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8000;

// -> Demo backend that looks at receiving notifications from a front end
//    when it's missing a translation key. The demo doesn't show what you
//    might do to address that, but it can be assumed that the corresponding
//    translation would be retrieved from a corresponding database.
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -> Missing translation key
app.post("/locales/add/:lng/:ns", (req, res) => {
  const { lng, ns } = req.params;

  console.log("request body -> ", req.body);
  console.log(lng, ns);

  res.sendStatus(200);
})

app.listen(PORT, () => console.log(`i18n Backend listening at port ${PORT}`))