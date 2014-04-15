window.onorientationchange = function() {
    setTimeout(function() {
        $('#background').hide().show();

    }, 1000)
}

var flaxman = angular.module('Flaxman', ['ngRoute']).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});