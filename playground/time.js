var moment = require('moment');

var date = moment().format('llll');

// console.log(date.format('llll'));

// console.log(date.format('LT'));(

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 0;
var date = moment(createdAt);
console.log(date.format('h:mm a'));

console.log(date);


