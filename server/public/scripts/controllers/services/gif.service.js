giphyApp.service('GifService',[ '$http', function($http) {
	console.log (' gif service loaded');

	var self = this;

	let apiKey = 'wR50GyIW22ZM02cGq378wMWBg3FUResr';
	let randomUrl = 'https://api.giphy.com/v1/gifs/random';

	self.greeting = 'Greetings from the Gif service';

	self.gifLocation = {};

	self.getRandom = function () {
		console.log('in getRandom service');
		// const config = {
		// 	params:{
		// 		api_key: apiKey
		// 	}
		// };
		$http.get('/serverRandom').then(function (response) {
			console.log('The response in gif.service is :', response);
			self.GifImage = response;
			self.gifLocation.imageUrl = response.data.data.image_url;
		});

		/////** I am now using axios to perform the get on the server instead on here on the client with $http**
		// $http.get(randomUrl, config).then(function(response){
		// 	console.log('random service response ', response);
		// 	self.gifLocation.imageUrl = response.data.data.image_url;
		// 	// console.log('random service image final link ', self.GifUrl);
		// 	//self.GifImage = response.
		// });
		self.showFlag = false;
		self.showImage = function(){
			self.showFlag = true;
			console.log(self.showFlag);
		};
	}; // End self.getRandom function

	self.gifSearch = {};
	self.searchGif = function(search){
		//Create an object so we can send it with the get
		searchObj = {
			search : search
		};
		let promise =
			$http.post('/serverSearch',searchObj).then(function (response) {
			console.log('The response in gif.service search is :', response);
			self.GifImage = response;
			self.gifSearch.gifUrl = response.data.data[0].images.fixed_height.url;
			console.log('The image is :', self.gifSearch.gifUrl);
			// const config = {
			// 	params:{
			// 		api_key: apiKey,
			// 		q: search
			// 	}
			// }
			// $http.get('https://api.giphy.com/v1/stickers/search', config).then(function(response){
			// 	console.log('search response ', response);
			// 	console.log(response.data.data[0].url);
			// 	self.gifSearch.gifUrl = response.data.data[0].images.fixed_height.url;
			// 	console.log('search total response is ', self.GifUrl );
			//
			// });
		});
		return promise;
	};// End self.searchGif function
}]);