// Import express
const express = require('express');

const app = express();

//Data
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
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

//Listener
app.listen(3000, () => {
    console.log('Listening on port 3000');
});