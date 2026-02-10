const express = require('express');
const app = express();
const port = 3000;

let products = [
    {}
]

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Главная страница');
})

app.post('/products', (req, res) => {
    const {id,name,price} = req.body;

    const newProduct = {
        id: Date.now(),
        name,
        price
    };

    products.push(newProduct);
    res.status(201).send(newProduct);
})

app.get('/products', (req, res) => {
    res.send(JSON.stringify(products));
})

app.get('/products/:id', (req, res) => {
    let user = user.find(p => p.id === req.params.id);
    res.send(JSON.stringify(user));
})

app.path('/products/:id', (req, res) => {
    let product = product.find(p => p.id === req.params.id);
    const {name, price} = req.body;

    if( name !== undefined) product.name = name;
    if( price !== undefined) product.price = price;

    res.json(product);
})

app.delete('/products/:id', (req, res) => {
    users = users.filter(user => user.id !== req.params.id);
    res.send('Ok');
})

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
