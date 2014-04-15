flaxman.factory('Media', ['$http',
    function MediaFactory($http) {

        var Media = {};

        Media.getAll = function(callback) {
            $http.get('/api/media.json').success(function(data, status) {
                callback(data)
            })
        }

        Media.getSingle = function(id, callback) {
            $http.get('/api/media/' + id + '.json').success(function(data, status) {
                callback(data)
            })
        }

        Media.getRelated = function(id, callback) {
            $http.get('/api/media/related/' + id + '.json').success(function(data, status) {
                callback(data)
            })
        }

        return Media;

    }
]);