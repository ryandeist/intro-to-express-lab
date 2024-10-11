// import express
const express = require('express');

const app = express();

//middleware functions

//Routes
app.get("/greetings/:username", (req, res) => {
    const username = req.params.username

    res.send(`<h1>Greetings ${username}</h1>`);
});

app.get("/roll/:diceRoll", (req, res) => {
    const diceRoll = Number(req.params.diceRoll);

    if (diceRoll) {
        let randomNum = Math.floor(Math.random() * diceRoll);
        res.send(`<h1>You rolled a ${randomNum}</h1>`);
    } else {
        res.send(`<h1>You must specify a number.</h1>`);
    };
});

//Listener
app.listen(3000, () => {
    console.log('Listening on port 3000');
});