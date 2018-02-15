const express = require('express'),
      bodyParser = require('body-parser'),
      port = 3005,
      data = require('./data.json'),
      cors = require('cors'),
      app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/api/getAllUsers', (req, res) => {
  res.status(200).send(data);
})
app.get('/api/getUser/:id', (req, res) => {
  let user = data.filter(e => e.id === +req.params.id)[0]
  res.status(200).send(user)
})
app.listen(port, () => console.log(`listening on port ${port}`))