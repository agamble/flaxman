flaxman.controller('BrowseController', ['Media', '$scope', '$interval',
    function BrowseController(Media, $scope, $interval) {

        $scope.media = Media.home;
        console.log(Media.home)

        $scope.testForThumbnail = function(card) {
            if (card.fields.thumbnail) {
                return ""
            } else {
                return "no_thumbnail"
            }
        }

        $scope.addMore = function() {
            $scope.media = $scope.media
        }
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

flaxman.directive('heightFixer', [

    function() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {}
        };
    }
]);


// flaxman.directive('card', function() {
//     return function(scope, elm, attrs) {
//         var next = function() {

//         }

//         // elm.on('click', function(e) {
//         //     var pos = $(this).position();
//         //     var x = e.pageX - pos.left;
//         //     console.log(e.pageX)

//         //     if (x > elm.width() / 2) {
//         //         next();
//         //         console.log('next')
//         //     } else {
//         //         previous();
//         //         console.log('prev')

//         //     }
//         // })
//         scope.$watch('media', function(data) {
//             if (( !! data.fields.description) && !flaxman.isMobile()) {
//                 elm.on('load', function() {
//                     var width = $(elm).width() + 300;
//                     var height = $(elm).height() + 100;
//                     var parent = $('#single');
//                     parent.css('width', width + "px");
//                     parent.css('margin-left', (-width / 2) + "px");
//                     parent.css('height', height + "px");
//                 })
//             } else {
//                 elm.on('load', function() {
//                     var width = $(elm).width();
//                     var height = $(elm).height() + 100;
//                     var parent = $('#single');
//                     parent.css('width', width + "px");
//                     parent.css('margin-left', (-width / 2) + "px");
//                     parent.css('height', height + "px");
//                 })

//             }
//         })

//     }
// })

flaxman.directive('relatedContent',
    function() {
        // Runs during compile
        return {
            templateUrl: '/static/partials/related.html',
        };
    }
);

flaxman.directive('rowWidth', ['$timeout',

    function($timeout) {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {
                var width;
                var setWidth = function() {
                    var new_width = 0;
                    angular.forEach(iElm.children(), function(e, i) {
                        new_width += $(e).width() + 20;
                    });
                    console.log(new_width)
                    $(iElm).css('width', new_width + 500 + 'px');
                    return new_width;
                }

                $timeout(function() {

                    elm.bind('scroll', function() {
                        if (raw.scrollLeft + raw.offsetWidth >= raw.scrollWidth) {
                            $scope.addMore()
                        }
                    })
                }, 1000);
            }
        }
    }
]);

// flaxman.directive("setStyle", function() {
//     return {
//         link: function(scope, element) {
//             var getWidth = function() {
//                 var new_width = 0;
//                 angular.forEach(element[0].children, function(child, index) {
//                     new_width += child.offsetWidth + 25;
//                 })
//                 console.log(new_width)
//                 element[0].style.width = new_width + "";
//                 console.log(element)

//             }
//             scope.$watch(element[0].children, getWidth);
//         }
//     }
// });