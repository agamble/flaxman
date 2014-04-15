// window.onload = function() {
//     //adding the event listerner for Mozilla
//     if (window.addEventListener)
//         document.addEventListener('DOMMouseScroll', moveObject, false);

//     //for IE/OPERA etc
//     document.onmousewheel = moveObject;
// }

// function moveObject(event) {
//     if (event.wheelDelta) {

//         // IE and Opera
//         delta = event.wheelDelta / 60;

//     } else if (event.detail) {

//         // W3C
//         delta = -event.detail / 2;
//     }
//     document.getElementById("fixed").scrollLeft -= delta * 50;
// }

flaxman.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/media/image/:id', {
            templateUrl: "/static/partials/single_image.html",
            controller: 'ImageSingleController',
        })
        .when('/media/video/:id', {
            templateUrl: '/static/partials/video_single.html',
            controller: 'VideoSingleController',
        })
        .when('/media/audio/:id', {
            templateUrl: '/static/partials/audio_single.html',
            controller: 'AudioSingleController',
        })
        .otherwise({
            redirectTo: '/'
        });
})



flaxman.controller('BrowseController', ['Media', '$scope', '$interval',
    function BrowseController(Media, $scope, $interval) {
        $scope.media = Media.home
        console.log(Media.home)

        $scope.width = function() {
            var new_width = 0;
            $('#row1 > *').width(function(i, w) {
                new_width += w;
            });
            if (new_width < 1000) {
                new_width = 10000;
            }
            return {
                width: new_width + 300 + "px",
            };
        }

        // $interval($scope.width(), 100);
    }
])

flaxman.controller('ImageSingleController', ['Media', '$scope', '$routeParams', '$location',
    function BrowseController(Media, $scope, $routeParams, $location) {
        Media.getSingle($routeParams.id).success(function(data) {
            $scope.media = data[0]

        })

        Media.getRelated($routeParams.id, function(data) {
            $scope.related = data;
        })

        $scope.goHome = function() {
            $location.path('/');
        }

        $scope.setSingleWidth = function() {
            var width = $('.single_image img').width() + 300;
            return {
                width: width + "px",
                'margin-left': -width / 2 + "px"
            }
        }
    }
])

flaxman.directive('card', function() {
    return function(scope, elm, attrs) {
        elm.on('load', function() {
            var width = $(elm).width() + 300;
            var height = $(elm).height() + 100;
            elm.parent().css('width', width + "px");
            elm.parent().css('margin-left', (-width / 2) + "px");
            elm.parent().css('height', height + "px");
        })
    }
})

flaxman.directive('relatedContent',
    function() {
        // Runs during compile
        return {
            templateUrl: '/static/partials/related.html',
        };
    }
);


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