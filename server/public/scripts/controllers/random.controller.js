
giphyApp.controller('GiphyRandomController', ['GifService','$http', function(GifService, $http){
    let self = this;

    // let apiKey = 'wR50GyIW22ZM02cGq378wMWBg3FUResr';
    // let url = 'https://api.giphy.com/v1/gifs/random';

	self.randomImageData = GifService.gifLocation;

    self.gifServiceRandom = function () {
        GifService.getRandom();
    };



    // const config = {
    //   params:{
    //       api_key: 'wR50GyIW22ZM02cGq378wMWBg3FUResr'
    //   }
    // };
    // $http.get('https://api.giphy.com/v1/gifs/random', config).then(function(response){
    //     console.log('random response ', response);
    //     self.GifUrl=response.data.data.image_url;
    //     console.log('random image final link ', self.GifUrl);
    //     //self.GifImage = response.
    // });
    //
    // self.showFlag = false;
    //
    // self.showImage = function(){
    //     self.showFlag = true;
    //     console.log(self.showFlag);
    // };

    console.log('end of random controller');
}]); // End of random controller