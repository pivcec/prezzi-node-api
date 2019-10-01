const fs = require("fs");

fs.writeFile(
  "./google-credentials-heroku.json",
  process.env.GOOGLE_CONFIG,
  err => {
    console.log("error writing credentials file", error);
  }
);
