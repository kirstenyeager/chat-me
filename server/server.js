const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (res, req) => {
	console.log('hello');
})

app.listen(3000, (res, req) => {
	console.log('listening on port 3000');
});