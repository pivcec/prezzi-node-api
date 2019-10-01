const fs = require("fs");

console.log("process.env.GOOGLE_CONFIG", process.env.GOOGLE_CONFIG);

fs.writeFile(
  `${__dirname}/google-credentials-heroku.json`,
  process.env.GOOGLE_CONFIG,
  error => {
    console.log("error writing credentials file", error);
  }
);
