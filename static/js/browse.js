flaxman.factory('Media', ['$http',
    function MediaFactory($http) {

        var Media = {};

        Media.get = function(callback) {
            $http.get('/api/media.json').success(function(data, status) {
                callback(data)

            })
        }
        return Media;
    }
]);



flaxman.controller('BrowseController', ['Media',
    function BrowseController(Media, $scope) {
        var media = [];
        Media.get(function(data) {
            media.push(data.splice(0, Math.ceil(data / 3)));
            media.push(data.splice(0, Math.ceil(data / 2)));
            media.push(data);
            console.log(media);
        })

    }
])