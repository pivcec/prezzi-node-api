const projectId = process.env.GOOGLE_PROJECT_NAME;
const keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS;
console.log("projectId", projectId);
console.log("keyFilename", keyFilename);
const { Storage } = require("@google-cloud/storage");
const storage = new Storage({ keyFilename, projectId });
const bucketName = "prezzi";
const bucket = storage.bucket(bucketName);

/**
 * Get public URL of a file. The file must have public access
 * @param {string} fileName
 * @return {string}
 */

exports.bucket = bucket;

exports.getPublicUrl = fileName =>
  `https://storage.googleapis.com/${bucketName}/${fileName}`;
