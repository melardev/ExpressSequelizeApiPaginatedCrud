require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const GenericDto = require('./dtos/responses/shared/generic.dto');
const BenchmarkMiddleware = require('./middlewares/benchmark.middleware');

const app = express();

const todosRouter = require('./routes/todos.routes');



app.use(BenchmarkMiddleware.benchmark);

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/todos', todosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json(GenericDto.buildWithErrorMessages(err));
});

module.exports = app;
