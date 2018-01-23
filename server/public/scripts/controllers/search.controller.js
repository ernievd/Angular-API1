giphyApp.controller('GiphySearchController', ['$http', function($http){
    let self = this;

    self.searchText="";

    self.showImage = function(){
        const config = {
            params:{
                api_key: 'wR50GyIW22ZM02cGq378wMWBg3FUResr',
                q: self.searchText
            }
        };
        console.log('config of Search is ',  config);
        $http.get('https://api.giphy.com/v1/stickers/search', config).then(function(response){
            console.log('search response ', response);
            console.log(response.data.data[0].url);
            self.GifUrl = response.data.data[0].images.fixed_height.url;
            console.log('search total response is ', self.GifUrl );

        });
        self.showFlag = false;
        self.showFlag = true;
        console.log(self.showFlag);
    };
    console.log('end of search controller');
}]); // End of search controller

