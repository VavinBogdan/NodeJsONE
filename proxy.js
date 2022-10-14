const express = require("express");
const app = express();
app.use("/",function (request, response) {
  response.redirect("http://127.0.0.1:3000")
});
app.listen(3001);
