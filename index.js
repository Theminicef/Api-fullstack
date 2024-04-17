const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.models');
const productRoute = require('./routes/product.route');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use('/api/products', productRoute);




app.get('/', (req, res) => {
    res.send("Hola desde la API de Alese");
});



// Post 


// update a product


// delete a product


mongoose.connect("mongodb+srv://oluaese:RAniuVYubnTS164a@backenddb.t7anvbe.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("Connection Failed!")
});
