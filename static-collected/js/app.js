var flaxman = angular.module('Flaxman', ['ngRoute']).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});