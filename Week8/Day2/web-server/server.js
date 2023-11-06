const express = require("express");
const bp = require('body-parser');
const { products } = require("./config/db.js");


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
    console.log(`running on port 3001`)
});

app.get("/", (req, res) => {
    console.log(req);
    res.send('<h1>Hello</h1>')
});

// CRUD-READ-GET-get all products

app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "IPhone",
            price: 800,
        }, {
            id: 2,
            name: "IPad"
            ,
            price: 900,
        }, {
            id: 3,
            name: "AirPods",
            price: 500,
        }
    ];
    res.send(products);
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    // console.log('params=>', req.params);
    const { id } = req.params;
    const product = products.find((item) => item.id == id);
    if (!product) return res.status(404).json({ message: 'Product Not Found.' })
    res.json(products);
});

// CRUD-READ-GET - search for product

app.get('/api/search', (res, req) => {
    console.log('query=>', req.query);
    const { name } = req.query;
    const filtered = products.filter(item => {
        item.name.toLowerCase().includes(name.toLowerCase())
    })
    if (filter.length === 0) return res.status(404).json({ message: 'Not Found.' })
    req.json(filtered);
});


app.post('api/products', (req, res) => {
    console.log('body=>', req.body);
    const new_product = { ...req.body, id: products.length + 1 };
    products.push(new_product);
    res.json(products)
});




