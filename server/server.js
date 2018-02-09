const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const env = (process.env.NODE_ENV || 'development');

if ('production' === env) {
  const forceSSL = () => {
    return (req, res, next) => {
      if (req.headers[ 'x-forwarded-proto' ] !== 'https') {
        return res.redirect([ 'https://', req.get('Host'), req.url ].join(''));
      }
      next();
    }
  };
  app.use(forceSSL());
}
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../www')));
app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../www/index.html'))
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error(
    '<span style="font-size: 24px; font-family: Roboto, Helvetica, Arial, sans-serif; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; align-content: center;">404 - Resource Not Found</span>');
  err.status = 404;
  next(err);
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
