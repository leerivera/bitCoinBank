const express = require('express');

const app = express();

app.use(express.static(__dirname  + '/build'));

app.get('*', (req, res) => {
    res.sendFile(__dirname  + '/build/index.html');
});

const port = process.env.PORT || 3001

app.listen(port, () => console.log('server started on ', port));