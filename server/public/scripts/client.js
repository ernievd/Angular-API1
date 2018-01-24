let giphyApp = angular.module('giphyApp', ['ngRoute', 'ngMaterial']);

// app configuration
giphyApp.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/random', {
            templateUrl: '/views/random.html',
            controller: 'GiphyRandomController as vm'
        })
        .when('/search', {
            templateUrl: '/views/search.html',
            controller: 'GiphySearchController as vm'
        })
        .otherwise(
            { redirectTo: '/search' }
        );

});

//Two controllers - one controller for each view!!!!!!






// giphyApp.controller('GiphyRandomController', ['$http', function($http){
//     let self = this;
//     const config = {
//       params:{
//           api_key: 'wR50GyIW22ZM02cGq378wMWBg3FUResr'
//       }
//     };
//     $http.get('https://api.giphy.com/v1/gifs/random', config).then(function(response){
//         console.log('random response ', response);
//         self.GifUrl=response.data.data.image_url;
//         console.log('random image final link ', self.GifUrl);
//         //self.GifImage = response.
//     });
//
//     self.showFlag = false;
//
//     self.showImage = function(){
//         self.showFlag = true;
//         console.log(self.showFlag);
//     };
//
//     console.log('end of random controller');
// }]); // End of random controller


// giphyApp.controller('GiphySearchController', ['$http', function($http){
//     let self = this;
//
//     //self.searchText = {};
//
//     const config = {
//         params:{
//             api_key: 'wR50GyIW22ZM02cGq378wMWBg3FUResr',
//             q: 'cheeseburgers'
//         }
//     };
//     console.log('config of Search is ',  config);
//     $http.get('https://api.giphy.com/v1/stickers/search', config).then(function(response){
//         console.log('search response ', response);
//         console.log(response.data.data[0].url);
//         self.GifUrl = response.data.data[0].images.fixed_height.url;
//         console.log('search total response is ', self.GifUrl );
//
//     });
//     self.showFlag = false;
//     self.showImage = function(){
//         self.showFlag = true;
//         console.log(self.showFlag);
//     };
//     console.log('end of search controller');
// }]); // End of search controller
//
