const express = require('express');
const routes = require('./routes');

const port = process.env.PORT || 3001
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});