;(function(){
    'use script';

    var app = angular.module('samplePlayer.directives',[]);
    app.directive(function() {
        return {
            template:
                '<video width="320" height="240" controls> \
                    <source ng-repeat="stream in model.streams" ng-src="{{ stream.url }}" type="video/{{ stream.type }}"> \
                    <source src="movie.ogg" type="video/ogg"> \
                    Your browser does not support the video tag. \
                </video>',
            restrict: 'E',
            replace: true,
            scope: {
                video: '='
            }
        };
    });
})();