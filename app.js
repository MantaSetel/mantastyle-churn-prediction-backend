const express = require('express');

const app = express();
const PORT = 3000;

app.get('/health-check', (req, res) => {
  return res.send({ message: "Hello, world" });
})

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

module.exports = {app, server};
