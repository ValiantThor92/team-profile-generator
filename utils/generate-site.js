const fs = require('fs');

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style/style.css', 'dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      };
      resolve ({
        okay: true,
        message: 'created Stylesheet successfully!'
      });
    });
  });
};

module.exports = copyFile;