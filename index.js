const express = require('express');
const app = express();
const port = 3001;

app.use(express.json())  // middleware

app.get("/", (req, res) => {
  res.send("we are at home.")
})
app.get("/test/error", (req, res) => {
  res.status(404).send("we are not good ")
})

app.get("/test", (req, res) => {
  const product = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },]
  res.send({product});
})

app.post("/test", (req, res) => {
  res.send("hello from the post request")
})

app.put("/test", (req, res) => {
  res.send("hello from the put request ");
})

app.delete("/test", (req, res) => {
  res.send("hello from the delete request")
})
app.listen(port, () => {
  console.log(`server is running is on port ${port}`);
})

app.post("/test/data", (req, res) => {
  res.send(" hello "+req.body.name);
  // res.send(req.headers.token)   // request from headers
  // res.send(req.query.productID)    // request from paramters

})

app.delete("/test/head", (req, res) => {
  res.set('Custom-Header', 'This is a custom header');
  res.send("hello from the delete request");
});