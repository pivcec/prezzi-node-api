const fs = require("fs");

console.log("${__dirname}", __dirname);

fs.writeFile(
  `${__dirname}/google-credentials-heroku.json`,
  process.env.GOOGLE_CONFIG,
  err => {
    if (err) throw err;
  }
);
