// active button fix
$("button").on("touchstart", function() {
    $(this).removeClass("mobileHoverFix");
});
$("button").on("touchend", function() {
    $(this).addClass("mobileHoverFix");
});



var flaxman = angular.module('Flaxman', ['ngRoute', 'ngSanitize', 'ui.bootstrap']).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});


flaxman.isMobile = function() {
    return ($(window).width() <= 600);
};

flaxman.controller('HeaderController', ['Playlist', '$scope',
    function PlaylistFactory(Playlist, $scope) {
        Playlist.getHeader.success(function(data) {
            $scope.headerPlaylists = data
        })
    }
])

flaxman.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/explore', {
            templateUrl: "/static/partials/rows.html",
            controller: "BrowseController"
        })
        .when('/media/image/:id', {
            templateUrl: "/static/partials/single_image.html",
            controller: 'ImageSingleController',
        })
        .when('/media/video/:id', {
            templateUrl: '/static/partials/single_video.html',
            controller: 'VideoSingleController',
        })
        .when('/media/audio/:id', {
            templateUrl: '/static/partials/single_audio.html',
            controller: 'AudioSingleController',
        })
        .when('/media/text/:id', {
            templateUrl: '/static/partials/single_text.html',
            controller: 'TextSingleController',
        })
        .when('/playlist/:id', {
            templateUrl: '/static/partials/rows_playlists.html',
            controller: 'PlaylistController'
        })
        .when('/about/art-museum', {
            templateUrl: '/static/partials/about/art-museum.html',
            controller: 'AboutController'
        })
        .when('/about/contact', {
            templateUrl: '/static/partials/about/contact.html',
            controller: 'AboutController'
        })
        .when('/about/special-collections', {
            templateUrl: '/static/partials/about/special-collection.html',
            controller: 'AboutController'
        })
        .when('/about/partners', {
            templateUrl: '/static/partials/about/partners.html',
            controller: 'AboutController'
        })
        .when('/visit', {
            templateUrl: '/static/partials/about/visit.html',
            controller: 'AboutController'
        })
        .otherwise({
            redirectTo: '/explore'
        });
})