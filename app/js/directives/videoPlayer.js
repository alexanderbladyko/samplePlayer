;(function(){
	'use script';

	var app = angular.module('samplePlayer.videoPlayer',['ngSanitize']);
	app.directive("videoPlayer", ["$document", "$sce", "$timeout", function($document, $sce, $timeout) {
		return {
			template:
				'<div ng-click="toggle()">\
					<video controls poster="{{ video.images.placeholder }}"> \
						<source ng-repeat="stream in video.streams" type="video/{{ stream.type }}"\
								ng-src="{{ getTrusted(stream.url) }}"> \
						Your browser does not support the video tag. \
					</video>\
				</div>',
			restrict: 'E',
			replace: true,
			scope: {
				video: '='
			},
			link: function(scope, element) {
				var video = element[0].getElementsByTagName('video')[0];

				scope.getTrusted = function(url) {
					return $sce.trustAsResourceUrl(url);
				};

				scope.toggle = function() {
					if (video.paused || video.ended) {
						video.play();
					} else {
						video.pause();
					}
				};

				scope.$watch("video", function(newValue, oldValue) {
					if (oldValue) {
						if (!video.paused)
							video.pause();

						$timeout(function() {
							video.load();
							video.play();
						}, 0);
					} else {
						video.play();
					}
				});
			}
		};
	}]);
})();
