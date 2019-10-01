const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const fs = require("fs");
const request = require("request");
const Multer = require("multer");

const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 10 * 1024 * 1024 // Maximum file size is 10MB
  }
});

const gcsMiddlewares = require("../middleware/google-cloud-storage");
const gcvHelpers = require("../common/google-cloud-vision");

router.post(
  "/",
  jsonParser,
  multer.single("image"),
  gcsMiddlewares.sendUploadToGCS,
  async (req, res, next) => {
    if (req.file && req.file.gcsUrl) {
      try {
        const response = await gcvHelpers.getVisionOcr(req.file.gcsUrl);
        if (response) {
          return res.send(response);
        }
      } catch (error) {
        return res.send(error);
      }
    }

    return res.status(500).send("Unable to upload");
  }
);

module.exports = router;
