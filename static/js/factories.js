flaxman.factory('Media', ['$http', '$q',
    function MediaFactory($http, $q) {

        var Media = {};
        Media.home = []
        Media.getSingle = function(id) {
            return $http.get('/api/media/' + id + '.json')
        }

        Media.getRelated = function(id, callback) {
            $http.get('/api/media/related/' + id + '.json').success(function(data, status) {
                callback(data)
            })
        }

        Media.getFirst = $http.get('/api/media/first.json')

        Media.getAll = $http.get('/api/media.json')

        $q.all([Media.getFirst, Media.getAll]).then(function(values) {
            Media.home.push(values[0].data.splice(0, Math.ceil(values[0].data.length / 3)));
            Media.home.push(values[0].data.splice(0, Math.ceil(values[0].data.length / 2)));
            Media.home.push(values[0].data);
            Media.home[0] = Media.home[0].concat(values[1].data.splice(0, Math.ceil(values[1].data.length / 3)));
            Media.home[1] = Media.home[1].concat(values[1].data.splice(0, Math.ceil(values[1].data.length / 2)));
            Media.home[2] = Media.home[2].concat(values[1].data);
        })

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

        return Playlists
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