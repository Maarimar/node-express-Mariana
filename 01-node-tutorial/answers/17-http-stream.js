let http = require("fs");
let fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/bit.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe();
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
