;(function() {
    'use strict';

    angular.module('samplePlayer', [
        'ngRoute',
        'samplePlayer.controllers',
        'samplePlayer.services',
        'samplePlayer.videoPlayer',
        'samplePlayer.videoList'
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
