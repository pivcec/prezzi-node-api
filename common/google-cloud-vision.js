const projectId = process.env.GOOGLE_PROJECT_NAME;
const keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const vision = require("@google-cloud/vision");
const client = new vision.ImageAnnotatorClient({ keyFilename, projectId });

/**
 * Get OCR text of a file
 * @param {string} url
 * @return {array}
 */

exports.getVisionOcr = async url => {
  try {
    const [result] = await client.textDetection(url);
    const texts = result.textAnnotations;
    return texts;
  } catch (error) {
    console.log("error getting OCR", error);
  }
};
