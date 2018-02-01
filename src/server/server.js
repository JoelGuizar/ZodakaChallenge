const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const urlencode = require('urlencode');
const PORT = process.env.PORT ||8080;
const token = process.env.TOKEN || "AAAAAAAAAAAAAAAAAAAAAJwB4QAAAAAAQismm%2BXviBD%2F1XsQr4kqcoa%2B2s0%3Dv1KflkY5TwTJWFgY1RKhxRzmjsJTSn5xh9DICerRdUB90b3siJ"
const ROOT_URL = 'https://api.twitter.com/1.1/search/tweets.json?';
const app = express();

//bearerToken
const token2 = {"token_type":"bearer","access_token":"AAAAAAAAAAAAAAAAAAAAAJwB4QAAAAAAQismm%2BXviBD%2F1XsQr4kqcoa%2B2s0%3Dv1KflkY5TwTJWFgY1RKhxRzmjsJTSn5xh9DICerRdUB90b3siJ"}

//example GET request URL
//https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4
app.use(express.static(path.resolve('public')));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'localhost:8080',
  methods: 'GET, POST',
  credentials: true,
  optionsSuccessStatus: 200,
  exposedHeaders: ['Authorization']
};

const CONFIG = {
  headers: {
    Authorization: `Bearer ${token2.access_token}`,
  }
};


app.get('/', cors(corsOptions), (req, res, next)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.post('/getTwitter', cors(corsOptions), (req, res, next)=>{
  console.log('req.body===', req.body, typeof req.body);
  const searchTerm = req.body.searchTerm;
  const QUERY_URL = `${ROOT_URL}q=${urlencode(searchTerm)}&count=10`;

  axios.get(QUERY_URL, CONFIG)
    .then((results)=>{
      res.sendStatus(200);
      console.log(results);
      res.send(results);
    })
    .catch((err)=>{
      res.sendStatus(404);
      console.log(err);
    })
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
