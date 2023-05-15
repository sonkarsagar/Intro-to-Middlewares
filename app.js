const express = require('express');
const bodyParser=require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product',(req, res, next) => {
  res.send('<form action="/product" method="post"><label for="product">Product</label><input type="text" name="name" id="product"><label for="size">Size</label><input type="number" name="size" id="size"><button type="submit">Submit</button></form>')
});

app.use('/product',(req, res, next) => {
  console.log(req.body);
  res.redirect('/')
});

app.use('/',(req, res, next) => {
  res.send('<h1>Home Page!!!</h1>');
});

app.listen(3000);