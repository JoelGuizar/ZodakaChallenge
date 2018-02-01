const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const _ = require('lodash');
const urlencode = require('urlencode');
const PORT = process.env.PORT ||8080;
const token = process.env.TOKEN || "AAAAAAAAAAAAAAAAAAAAAJwB4QAAAAAAQismm%2BXviBD%2F1XsQr4kqcoa%2B2s0%3Dv1KflkY5TwTJWFgY1RKhxRzmjsJTSn5xh9DICerRdUB90b3siJ"
const ROOT_URL = 'https://api.twitter.com/1.1/search/tweets.json?';
const app = express();

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
    Authorization: `Bearer ${token}`,
  }
};

app.get('/', cors(corsOptions), (req, res, next)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.post('/getTwitter', cors(corsOptions), (req, res, next)=>{
  const searchTerm = req.body.searchTerm;
  const QUERY_URL = `${ROOT_URL}q=${urlencode(searchTerm)}&count=10`;

  axios.get(QUERY_URL, CONFIG)
    .then((results)=>{
      const tweets = [];

      results.data.statuses.forEach((e,i)=>{
        tweets.push(_.pick(e, ['created_at','text', 'id_str']));
        tweets[i].user = _.pick(e.user, ['name', 'screen_name','description','followers_count', 'location', 'favourites_count', 'profile_image_url'])
      })

      res.send(tweets);
      res.sendStatus(200);
    })
    .catch((err)=>{
      console.log(err);
      res.sendStatus(404);
    })
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
