const express = require('express')
const app = express()
const PORT = 3000

app.get('/hello_world', (req, res) => {
    res.send('HELLO WORLD!');
})

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
})