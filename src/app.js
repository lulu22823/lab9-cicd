const express = require('express');

const PORT = 3001;
const app = express();

app.get('/', (req, res) => {
  res.send('Lab9 v3-pr Ilkiv');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Running on http://0.0.0.0:${PORT}`);
});
