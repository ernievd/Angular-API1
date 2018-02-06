const express = require('express');
const app = express();
const env = require('dotenv');
const axios = require('axios');

app.use(express.static('server/public'));


// This get all the assignments in the .env file
env.config();

// let port = process.env.PORT || 5000;
let port = process.env.PORT;

app.listen(port, () => {
    console.log(`server running on ${port}`);
	// console.log('Process.env is ', process.env);

});


let apiKey = process.env.API_KEY;
let randomUrl = 'https://api.giphy.com/v1/gifs/random';

const config = {
	params:{
		api_key: apiKey
	}
};

//instead of router using app.get ***********
app.get('/search',(req,res) => {
	console.log('in the server get');
	axios.get(`https://api.giphy.com/v1/gifs/random`, config).then(function (response) {
		// console.log('server response to /ernie is ', response.data);
		res.send(response.data);
	}).catch((err)=>{
		console.log(err)
	})
});