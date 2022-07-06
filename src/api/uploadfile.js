//src/api/my-first-function.js
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/markdowns');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const uploadFile = multer({ storage: storage }).single('FILE');
export default function handler(req, res) {
  console.log(req.files);
  uploadFile(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
}