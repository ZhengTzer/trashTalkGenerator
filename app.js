//related module
const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// using function
const generateTrashTalk = require("./generate_trashTalk");

// set template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting static files
app.use(express.static("public"));

// check selected job
handlebars.registerHelper("checkJob", function (job, targetJob, options) {
  if (job === targetJob) {
    return options.fn(this);
  }
  return options.inverse(this);
});

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const options = req.body.job;
  const trashTalk = generateTrashTalk(options);
  res.render("index", { trashTalk: trashTalk, options: options });
});

// port listening
app.listen(port, () => {
  console.log(`The Express Server is running on http://locahost:${port}`);
});
