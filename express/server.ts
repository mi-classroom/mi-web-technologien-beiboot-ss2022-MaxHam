require('dotenv').config()
const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');
const app = express();
let port = process.env.PORT || 3000

app.use(
  basicAuth({
    challenge: true,
    users: { cranach: 'meisterwerke' }
  })
);
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

// add middlewares

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
