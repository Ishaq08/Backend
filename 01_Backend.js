require('dotenv').config();
const express = require('express');
const app = express();
 port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello World from Express");
});

app.get('/api', (req, res) => {
res.send("Hello World from Express API")
});
 
app.get('/login/test', (req, res) => {
    res.send("Login Page")
});

app.get('/login', (req, res) => {
    res.send("user Login")
});
app.listen(port, () => {
    console.log(`server is running on port ${port}`); 
});
