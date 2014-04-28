flaxman.controller('BrowseController', ['Media', '$scope', '$interval',
    function BrowseController(Media, $scope, $interval) {

        Media.lel($scope);
    }
])

flaxman.controller('HeaderController', ['$scope', '$location',
    function HeaderController($scope, $location) {
        $scope.isActive = function(viewLocation) {
            return viewLocation === ('/#' + $location.path());
        };
    }
])

flaxman.controller('PlaylistController', ['$scope', 'Playlist', '$routeParams',
    function PlaylistController($scope, Playlist, $routeParams) {
        Playlist.getSingle($routeParams.id)
        $scope.media = Playlist.home;
    }
])

flaxman.controller('ImageSingleController', ['Media', '$scope', '$routeParams', '$location', '$sce',
    function BrowseController(Media, $scope, $routeParams, $location, $sce) {
        Media.getSingle($routeParams.id).success(function(data) {
            $scope.media = data.splice(0, 1)[0];
            $scope.children = data;
            console.log($scope.media)
        })

        Media.getRelated($routeParams.id, function(data) {
            $scope.related = data;
        })

        $scope.goHome = function() {
            $location.path('/');
        }
    }
])

flaxman.controller('VideoSingleController', ['Media', '$scope', '$routeParams', '$location', '$sce',
    function BrowseController(Media, $scope, $routeParams, $location, $sce) {
        Media.getSingle($routeParams.id).success(function(data) {
            $scope.media = data[0];
        })

        Media.getRelated($routeParams.id, function(data) {
            $scope.related = data;
        })

        $scope.goHome = function() {
            $location.path('/');
        }
        $scope.trustUrl = function(url) {
            return $sce.trustAsResourceUrl(url);
        }
    }
])

flaxman.controller('AudioSingleController', ['Media', '$scope', '$routeParams', '$location', '$sce',
    function BrowseController(Media, $scope, $routeParams, $location, $sce) {
        Media.getSingle($routeParams.id).success(function(data) {
            $scope.media = data[0];
            console.log($scope.media)
        })

        Media.getRelated($routeParams.id, function(data) {
            $scope.related = data;
        })

        $scope.goHome = function() {
            $location.path('/');
        }
        $scope.trustUrl = function(url) {
            return $sce.trustAsResourceUrl(url);
        }


    }
])

flaxman.controller('TextSingleController', ['Media', '$scope', '$routeParams', '$location', '$sce',
    function BrowseController(Media, $scope, $routeParams, $location, $sce) {
        Media.getSingle($routeParams.id).success(function(data) {
            $scope.media = data[0];
            console.log($scope.media)
        })

        Media.getRelated($routeParams.id, function(data) {
            $scope.related = data;
        })

        $scope.goHome = function() {
            $location.path('/');
        }
        $scope.trustUrl = function(url) {
            return $sce.trustAsResourceUrl(url);
        }
    }
])

flaxman.controller('AboutController', ['About', '$scope',
    function AboutController(About, $scope) {
        About.getArtMuseum.success(function(data) {
            $scope.artMuseum = data[0];
        })
        About.getContact.success(function(data) {
            $scope.contact = data[0];
        })
        About.getSpecialCollections.success(function(data) {
            $scope.specialCollections = data[0];
        })
        About.getPartners.success(function(data) {
            $scope.partners = data;
        })
        About.getVisit.success(function(data) {
            $scope.visit = data[0];
            console.log($scope.visit)
        })
    }
])

flaxman.directive('relatedContent',
    function() {
        // Runs during compile
        return {
            templateUrl: '/static/partials/related.html',
        };
    }
);