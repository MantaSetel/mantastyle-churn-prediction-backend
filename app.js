const express = require('express');
const cors = require('cors')
const db = require('./src/models');
const routes = require('./src/routes');

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cors())

app.get('/health-check', (req, res) => {
  return res.send({ message: "Hello, world" });
})

let server; 
db.sequelize.sync().then(async () => {
  console.log('Database connected')
  server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  })
  routes(app);
})

module.exports = {app, server};
