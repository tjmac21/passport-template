const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');

const indexRouter = require('./routes/index');
const paymentsRouter = require('./routes/payments');
const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure Morgan logging
app.use(morgan('combined'));

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/payments', paymentsRouter);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Passport-Template API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], 
};

const openapiSpecification = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', err);
  res.status(err.status || 500).json({
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

module.exports = app;
