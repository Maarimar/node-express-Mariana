const express = require("express");
const app = express();
const authorized = (req, res, next) => {
    const {user}=req.query;
    if(user === 'Mariana'){
        req.user = {name: 'Mariana', id:3}
        next()
    }
    else {
        res.status(404).send('unauthorized')
    }
      console.log("authorized");
  next();

};



// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.use([logger, authorized]);

app.get("/",(req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("api/products", (req, res) => {
  res.send("Products");
});

app.get("api/items", (req, res) => {
  res.send("Items");
});

app.listen(5003, () => {
  console.log("Server us litening to port 5003");
});
