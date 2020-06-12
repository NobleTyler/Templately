const express = require('express');
const os = require('os');
const fs = require('fs');

const app = express();

fs.readFile(`${__dirname}/greetings.json`, (err, data) => {
  if (err) throw err;
  const greetings = JSON.parse(data);
  console.log(greetings);
});

const message = 'Something is wrong. Please fix this app.';


app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/api/getGreeting', (req, res) => res.send({ message }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
