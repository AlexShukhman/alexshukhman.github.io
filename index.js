// Just for local hosting
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname));

app.get('/', (_req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));