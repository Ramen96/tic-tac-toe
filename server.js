const express = require("express", 4.19);
const browserSync = require("browser-sync");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.static("files"));

browserSync.init({
  proxy: "http://localhost:3000",
  port: 3001,
  files: ["public/**/*.*", "server.js"],
  open: false,
});

app.get("/", (req, res) => {
  res.send("public");
});

app.use((req, res, next) => {
  res.status(404).send("public");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
