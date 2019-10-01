const projectId = "Prezzi";
const keyFilename = "./conf/Prezzi-bac4d2dfc96d.json";
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
