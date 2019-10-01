const projectId = "Prezzi";
const keyFilename = "./google-credentials-heroku.json";
const keyFilename = process.env.GCP_KEY;
const vision = require("@google-cloud/vision");
const client = new vision.ImageAnnotatorClient({
  keyFilename,
  projectId
});

exports.getVisionOcr = async url => {
  try {
    const [result] = await client.textDetection(url);
    const texts = result.textAnnotations;
    return texts;
  } catch (error) {
    console.log("error getting OCR", error);
  }
};
