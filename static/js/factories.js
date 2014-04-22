

flaxman.factory('Media', ['$http', '$q',
    function MediaFactory($http, $q) {

	var number_of_cards_in_each_row_to_load_at_start = 3;


	counter = number_of_cards_in_each_row_to_load_at_start-1;

        var Media = {}; 
        Media.home = [];
	Media.lel = function($scope) {
		$q.all([Media.getFirst, Media.getAll]).then(function(values) {
            Media.home.push(values[0].data.splice(0, Math.ceil(values[0].data.length / 3)));
            Media.home.push(values[0].data.splice(0, Math.ceil(values[0].data.length / 2)));
            Media.home.push(values[0].data);
            Media.home[0] = Media.home[0].concat(values[1].data.splice(0, Math.ceil(values[1].data.length / 3)));
            Media.home[1] = Media.home[1].concat(values[1].data.splice(0, Math.ceil(values[1].data.length / 2)));
            Media.home[2] = Media.home[2].concat(values[1].data);
	c = Media.home;
		for (var i = 0; i < number_of_cards_in_each_row_to_load_at_start; i++){
			d[0][i] = c[0][i];
			d[1][i] = c[1][i];
			d[2][i] = c[2][i];
		}
		$scope.media=d;        //delayed the scope update to wait for the http request to return heheheheh...
	}) 
		//note that this block executes BEFORE the $q block above has returned, therefore c here is empty but above, c is Media.home returned. 
		console.log("media home:", Media.home); 
	}
        Media.getSingle = function(id) {
            return $http.get('/api/media/' + id + '.json')
        }

        Media.getRelated = function(id, callback) {
            $http.get('/api/media/related/' + id + '.json').success(function(data, status) {
                callback(data)
            })
        }

        Media.getFirst = $http.get('/api/media/first.json').then(function (results) {
return results;
}); 

        Media.getAll = $http.get('/api/media.json')

     /*   $q.all([Media.getFirst, Media.getAll]).then(function(values) {
            Media.home.push(values[0].data.splice(0, Math.ceil(values[0].data.length / 3)));
            Media.home.push(values[0].data.splice(0, Math.ceil(values[0].data.length / 2)));
            Media.home.push(values[0].data);
            Media.home[0] = Media.home[0].concat(values[1].data.splice(0, Math.ceil(values[1].data.length / 3)));
            Media.home[1] = Media.home[1].concat(values[1].data.splice(0, Math.ceil(values[1].data.length / 2)));
            Media.home[2] = Media.home[2].concat(values[1].data);
        })
	*/
            

        Media.getVimeoURL = function(id, callback) {
            $http.get('http://vimeo.com/api/v2/video/' + id + '.json').success(function(data) {
                callback(data[0].large_thumbnail)
            })
        }

        return Media;

    }
]);

flaxman.factory('Playlist', ['$http', '$q',
    function PlaylistFactory($http, $q) {
        var Playlists = {};

        Playlists.home = [];
        Playlists.getHeader = $http.get('/api/playlists/header.json')

        Playlists.getAll = $http.get('/api/media.json')

        Playlists.getSingle = function(id) {
            $http.get('/api/playlists/' + id + '.json').success(function(data) {
                Playlists.home.push(data.splice(0, Math.ceil(data.length / 3)));
                Playlists.home.push(data.splice(0, Math.ceil(data.length / 2)));
                Playlists.home.push(data)
            })
        }

        return Playlists;
    }
])

flaxman.factory('About', ['$http',
    function AboutFactory($http) {
        var About = {};

        About.getArtMuseum = $http.get('/api/about/artmuseum.json')
        About.getContact = $http.get('/api/about/contact.json')
        About.getSpecialCollections = $http.get('/api/about/specialcollection.json')
        About.getPartners = $http.get('/api/about/partners.json')
        About.getVisit = $http.get('/api/about/visit.json')
        return About;
    }
])
