giphyApp.service('GifService',[ '$http', function($http) {
	console.log (' gif service loaded');

	var self = this;

	let apiKey = 'wR50GyIW22ZM02cGq378wMWBg3FUResr';
	let url = 'https://api.giphy.com/v1/gifs/random';


	self.greeting = 'Greetings from the Gif service';

	self.gifLocation = {};

	self.getRandom = function () {
		console.log('in service');
		const config = {
			params:{
				api_key: apiKey
			}
		};
		$http.get(url, config).then(function(response){
			console.log('random service response ', response);
			self.gifLocation.imageUrl = response.data.data.image_url;
			// console.log('random service image final link ', self.GifUrl);
			//self.GifImage = response.
		});

		self.showFlag = false;

		self.showImage = function(){
			self.showFlag = true;
			console.log(self.showFlag);
		};

	}

}]);