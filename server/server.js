const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 3000;

const publicPath = path.join('__dirname', '../public');

app.use(express.static(publicPath));

app.get('/', () => {
	console.log('hello');
})

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});