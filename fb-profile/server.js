var app = require('express')();

app.get('/', function (req, res) {
    res.send('Hello World!! from Express');
});

app.listen(3000, function () {
    console.log('Server listening on 3000');
});