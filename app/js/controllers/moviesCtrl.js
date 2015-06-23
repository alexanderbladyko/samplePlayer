;(function() {
    'use strict';

    var app = angular.module('samplePlayer.controllers', []);
    app.controller('MoviesCtrl', ['$scope', 'Movie', function($scope, Movie) {
        $scope.movies = Movie.get();

        //$scope.currentMovie = {};
        $scope.selected = function(movie) {
            $scope.currentMovie = movie;
        };
    }]);
})();