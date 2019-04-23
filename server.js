const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const path = require('path');

const allProducts = require('./public/data/products');
const banners = require('./public/data/banners');
let categories = require('./public/data/categories');

app.use(bodyParser.urlencoded({ extended: false }));

//Set View Engine

app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    //defaultView: 'default',
    //layoutsDir: __dirname + '/views/pages/',
    partialsDir: __dirname + '/views/partials/'
}));



app.get('/', (req, res) => {
    categories = categories.filter(each => each.order > 0);
    res.render('home', { banners, categories });
})

app.get('/signIn', (req, res) => {
    res.render('signIn');
})

app.get('/signUp', (req, res) => {
    res.render('signUp');
})

app.get('/products', (req, res) => {
    let products;
    const categoryID = req.query.categoryID;
    if (categoryID) {
        products = allProducts.filter(each => each.category == categoryID);
    }
    else {
        products = allProducts;
    }
    res.render('products', { products, categories });

})

app.get('/products/(*)', (req, res) => {
    res.redirect('/')
})

app.post('/cartValue', (req, res) => {
    res.end();
})

app.use(express.static('./public'));

app.listen(7070, () => {
    console.log('Server started on port 7070');
})