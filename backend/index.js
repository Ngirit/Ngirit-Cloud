const express = require('express');
const app = express();
const router = express.Router();
const authRoutes = require('./routes/routes');
const bodyParser = require('body-parser');

router.use('/food',(req, res, next) => {
  res.json({name: "Budi", email: "buditampan@gmail.com"});
  next();
});

router.use('/price',(req, res, next) => {
  res.json({price: 100000});
  next();
});

router.get('/customers',(req, res, next) => {
  res.json({name: "customer"});
  next();
});

app.use(bodyParser.json());


app.use('/v1/register', authRoutes);
app.use('/v1/login', authRoutes);

app.listen(8080);

