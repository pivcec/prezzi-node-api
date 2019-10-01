const fs = require("fs");

fs.writeFile(
  `${__dirname}/google-credentials-heroku.json`,
  process.env.GOOGLE_CONFIG,
  error => {
    console.log("error writing credentials file", error);
  }
);
