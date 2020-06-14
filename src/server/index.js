const express = require('express');
const os = require('os');
const fs = require('fs');
// const bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
let greetings = null;
fs.readFile(`${__dirname}/greetings.json`, (err, data) => {
  if (err) throw err;
  greetings = JSON.parse(data);
});


app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/api/getGreeting', (req, res) => res.send(greetings));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
