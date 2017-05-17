/**
 * Created by tommy on 17-5-17.
 */

var mongoose = require('mongoose');
var logger = require('pomelo-logger').getLogger('mongodb-log');

var db = mongoose.connect('mongodb://192.168.0.114:7777/csdn');

db.connection.on('connected',function (err) {
  if(err) logger.error('Database connection failure.');
});

console.log('connect...');