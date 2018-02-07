giphyApp.controller('GiphySearchController', ['GifService','$http', function(GifService, $http){
    let self = this;
    //This is the output of the final needed url from the services search get
    // self.searchData = GifService.gifSearch;
    // console.log('Self.SearchData is ', self.searchData);

	//**** Do I have to first declare it here before I use it? How do I get it from the DOM to here?
    //self.searchTxt = '';
    // console.log('self.searchtext is :' , self.searchTxt);
	// **** Assign the search string to a variable in the gifservice DOES NOT WORK - How do we get info from the DOM?
	// GifService.searchString = self.searchTxt;

	self.showImage = function(searchTxt){
		console.log('searchtext is:', searchTxt);
        GifService.searchGif(searchTxt).then(function(){
	        self.GifUrl = GifService.gifSearch.gifUrl;
	        // self.GifUrl = response.data.data[0].images.fixed_height.url;
	        console.log('URL in search controller is ', self.GifUrl );
        });

    };

    // self.searchText="";
    //
    // self.showImage = function(){
    //     const config = {
    //         params:{
    //             api_key: 'wR50GyIW22ZM02cGq378wMWBg3FUResr',
    //             q: self.searchText
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
    //     self.showFlag = true;
    //     console.log(self.showFlag);
    // };
    // console.log('end of search controller');
}]); // End of search controller

