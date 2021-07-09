const AWS = require("aws-sdk");
require("dotenv").config();
//------------------------------------------------------------------------
/**
 * global variables
 */

const bucketName = process.env.BUCKET_NAME;
const accessKeyId = process.env.AWS_KEY_ACCESS;
const secretAccessKey = process.env.AWS_KEY_SECRET;
const REGION = process.env.REGION;

console.log("bucketName", bucketName);

const s3 = new AWS.S3({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});
//------------------------------------------------------------------------
const uploadFile = (data) => {
  return new Promise((resolve, reject) => {
    try {
      const key =
        "invoice/" +
        new Date().getFullYear() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getDate() +
        "/" +
        "invoice_" +
        new Date().getTime() +
        ".pdf";

      const params = {
        Bucket: bucketName,
        Key: key, // File name you want to save as in S3
        Body: data,
        ACL: "public-read",
        region: REGION,
        ContentEncoding: "base64",
        ContentType: `application/pdf`,
      };

      console.log("params", params);

      console.log("s3", s3);

      // Uploading files to the bucket
      s3.upload(params, function (err, data) {
        if (err) {
          return reject(err);
        }
        var path = data.Location;

        // path = path.replace(process.env.AWS_S3_URL, "")

        console.log("path", path);

        // path = "/invoice" + path.split("invoice").pop();

        // console.log("path", path);

        resolve(path);
      });
    } catch (error) {
      console.log("error", error);
      return reject(error);
    }
  });
};

const deleteFile = (name) => {
  return new Promise((resolve, reject) => {
    try {
      s3.deleteObject(
        {
          Bucket: bucketName,
          Key: name,
        },
        (err, data) => {
          if (err) {
            //console.log("err", err);
            return reject(err);
          }
          return resolve();
        }
      );
    } catch (error) {
      console.log("error", error);
      return reject(error);
    }
  });
};

//------------------------------------------------------------------------
module.exports = { uploadFile, deleteFile };
