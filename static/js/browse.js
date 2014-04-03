flaxman.factory('media', function MediaFactory() {

    this.media = [
        [],
        [],
        []
    ]
    $http.get('/api/media').success(function(data, status) {
        for ()
    })

    return {
        getNumber: 4
    };
});

flaxman.controller('BrowseController', ['cards', '$scope',
    function BrowseController(cards, $scope) {
        $scope.something = cards.getNumber;
    }
])