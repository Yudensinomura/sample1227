const express = require('express');
const app = express()
app.use(express.static('statics'));
app.listen(3000,() => console.log('lisetening on port 3000....?'));