const express = require('express');
const { Reaction } = require('./Models');
const { Thought } = require('./Models');
const { User } = require('./Models');

const PORT = process.env.PORT || 3001
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());