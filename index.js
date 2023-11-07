const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  console.log("Hello world")
  return res.send("Hello World");
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})