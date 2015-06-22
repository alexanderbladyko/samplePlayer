;(function() {
    'use strict';

    var app = angular.module('samplePlayer.controllers', []);
    app.controller('MoviesCtrl', ['$scope', 'Movie', function($scope, Movie) {
        $scope.movies = [];

        Movie.get().success(function(data) {
            $scope.movies = data;
        });

        $scope.selected = function(movie) {
            $scope.movie = movie;
        };
    }]);
})();