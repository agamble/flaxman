flaxman.factory('Media', ['$http', '$q',
    function MediaFactory($http, $q) {

        var Media = {};
        Media.home = [

        ]


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
            console.log(values[0].data)

            Media.home.push(values[0].data.splice(0, Math.ceil(values[0].data.length / 3)));
            Media.home.push(values[0].data.splice(0, Math.ceil(values[0].data.length / 2)));
            Media.home.push(values[0].data);
            Media.home[0].concat(values[1].data.splice(0, Math.ceil(values[1].length / 3)));
            Media.home[1].concat(values[1].data.splice(0, Math.ceil(values[1].length / 2)));
            Media.home[2].concat(values[1].data);
        })
        return Media;

    }
]);