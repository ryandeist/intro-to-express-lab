// Import express
const express = require('express');

const app = express();

//Data
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

//Middleware functions

//Routes
//Exercise 1
app.get("/greetings/:username", (req, res) => {
    const username = req.params.username;

    res.send(`<h1>Greetings ${username}</h1>`);
});

// Exercise 2
app.get("/roll/:diceRoll", (req, res) => {
    const diceRoll = Number(req.params.diceRoll);

    if (diceRoll) {
        let randomNum = Math.floor(Math.random() * diceRoll);
        res.send(`<h1>You rolled a ${randomNum}</h1>`);
    } else {
        res.send(`<h1>You must specify a number.</h1>`);
    };
});

// Exercise 3
app.get("/collectibles/:collectiblesIndex", (req, res) => {
    const collectiblesIndex = Number(req.params.collectiblesIndex);
    if (collectiblesIndex < collectibles.length) {
        res.send(`<h1>The ${collectibles[collectiblesIndex].name} is available for $${collectibles[collectiblesIndex].price}.</h1>`);
    } else {
        res.send(`<h1>This item is not in stock. Check back soon.</h1>`);
    };
});

//Exercise 4
app.get("/shoes", (req, res) => {
    const shoeType = req.query.shoeType;
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    let shownShoes;

    if (shoeType) {
        shownShoes = shoes.filter((shoe) => shoe.type === shoeType);
        res.send(shownShoes);
    } else if (minPrice) {
        shownShoes = shoes.filter((shoe) => shoe.price >= minPrice);
        res.send(shownShoes);
    } else if (maxPrice) {
        shownShoes = shoes.filter((shoe) => shoe.price <= maxPrice);
        res.send(shownShoes);
    };
});

//Listener
app.listen(3000, () => {
    console.log('Listening on port 3000');
});