const express = require('express');
const { Reaction } = require('./Models');
const { Thought } = require('./Models');
const { User } = require('./Models');

const port = process.env.PORT || 3001
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});