;(function() {
    'use strict';

    angular.module('samplePlayer', [
        'ngRoute',
        'samplePlayer.controllers',
        'samplePlayer.services',
        'samplePlayer.directives'
    ]).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/movies', {
                    templateUrl: 'views/movies/index.html',
                    controller: 'MoviesCtrl'
                })
                .otherwise({ redirectTo: '/movies' });
        }]);
})();
