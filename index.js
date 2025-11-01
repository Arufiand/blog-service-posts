const express = require('express');
const randomBytes = require('crypto').randomBytes;
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const posts = {}

// Sample route
app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id,
        title
    };


    res.status(201).send(posts[id]);
});

app.listen(port, () => {
    console.log(`Posts service is running at http://localhost:${port}`);
});
