
giphyApp.controller('GiphyRandomController', ['$http', function($http){
    let self = this;
    const config = {
      params:{
          api_key: 'wR50GyIW22ZM02cGq378wMWBg3FUResr'
      }
    };
    $http.get('https://api.giphy.com/v1/gifs/random', config).then(function(response){
        console.log('random response ', response);
        self.GifUrl=response.data.data.image_url;
        console.log('random image final link ', self.GifUrl);
        //self.GifImage = response.
    });

    self.showFlag = false;

    self.showImage = function(){
        self.showFlag = true;
        console.log(self.showFlag);
    };

    console.log('end of random controller');
}]); // End of random controller