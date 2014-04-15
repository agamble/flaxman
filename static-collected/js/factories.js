flaxman.factory('Media', ['$http', '$q',
    function MediaFactory($http, $q) {

        var Media = {};
        Media.home = [
            [],
            [],
            []
        ]

        $q.all([Media.getFirst, Media.getAll]).then(function(values) {
            Media.home[0].push(values[0].splice(0, Math.ceil(data.length / 3)));
            Media.home[1].push(values[0].splice(0, Math.ceil(data.length / 2)));
            Media.home[2].push(values[0]);

            Media.home[0].push(values[1].splice(0, Math.ceil(data.length / 3)));
            Media.home[1].push(values[1].splice(0, Math.ceil(data.length / 2)));
            Media.home[2].push(values[1]);
        })

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

        Media.getFirst = function(id, callback) {
            $http.get('/api/media/first.json').success(function(data) {

            })
        }
        return Media;

    }
]);