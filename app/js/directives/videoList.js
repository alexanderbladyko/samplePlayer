;(function(){
	'use script';

	var app = angular.module('samplePlayer.videoList',[]);
	app.directive("videoList", ["$q", function($q) {
		return {
			template:
				'<div class="row"> \
					<div class="columns-4" ng-repeat="video in videos" ng-click="select(video)"> \
						<div class="video-item" ng-class="{ selected: selectedVideo == video }">\
							<img ng-src="{{ video.images.cover }}" /> \
							<p> \
								<cite>{{ video.title }}</cite> \
								<br/> \
								<i>{{ video.meta.releaseYear }}</i> \
							</p> \
						</div>\
					</div> \
				</div>',
			restrict: 'E',
			replace: true,
			scope: {
				list: '=',
				onSelected: '='
			},
			link: function(scope) {
				$q.when(scope.list).then(function(response) {
					scope.videos = response.data;
				});

				scope.select = function(video) {
					scope.selectedVideo = video;
					scope.onSelected(video);
				};
			}
		};
	}]);
})();
