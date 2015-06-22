;(function(){
	'use script';

	var app = angular.module('samplePlayer.services', []);
	app.service('Movie', ['$http', function($http) {
		return {
				get: function() {
					return $http.get("/app/movies.json");
				}
			};
	}]);
})();