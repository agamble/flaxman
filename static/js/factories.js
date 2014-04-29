//I CHANGED THIS TOO!!! !!!
flaxman.factory('Media', ['$http', '$q',
    function MediaFactory($http, $q) {

        var Media = {};

        var card_incrementer = 10;
        Media.getFirst = $http.get('/api/media/first.json');

        Media.getAll = $http.get('/api/media.json');

        $q.all([Media.getFirst, Media.getAll]).then(function(values) {
            var hidden_cards = [];
            hidden_cards.push(values[0].data.splice(0, Math.ceil(values[0].data.length / 3)));
            hidden_cards.push(values[0].data.splice(0, Math.ceil(values[0].data.length / 2)));
            hidden_cards.push(values[0].data);
            hidden_cards[0] = hidden_cards[0].concat(values[1].data.splice(0, Math.ceil(values[1].data.length / 3)));
            hidden_cards[1] = hidden_cards[1].concat(values[1].data.splice(0, Math.ceil(values[1].data.length / 2)));
            hidden_cards[2] = hidden_cards[2].concat(values[1].data);
            Media.hiddenCards = hidden_cards;
            initialiseViewableCards();
        })

        Media.viewableCards = [
            [],
            [],
            []
        ]

        var initialiseViewableCards = function() {
            Media.viewableCards[0] = Media.hiddenCards[0].slice(0, 10);
            Media.viewableCards[1] = Media.hiddenCards[1].slice(0, 10);
            Media.viewableCards[2] = Media.hiddenCards[2].slice(0, 10);
        }

        Media.addMoreMedia = function() {
            card_incrementer += 10;
            Media.viewableCards[0].concat(Media.hiddenCards[0].slice(card_incrementer - 10, card_incrementer));
            Media.viewableCards[1].concat(Media.hiddenCards[1].slice(card_incrementer - 10, card_incrementer));
            Media.viewableCards[2].concat(Media.hiddenCards[2].slice(card_incrementer - 10, card_incrementer));
        }

        Media.getSingle = function(id) {
            return $http.get('/api/media/' + id + '.json')
        }
        Media.getRelated = function(id, callback) {
            $http.get('/api/media/related/' + id + '.json').success(function(data, status) {
                callback(data)
            })
        }


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