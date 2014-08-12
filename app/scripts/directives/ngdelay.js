'use strict';

/**
 * @ngdoc directive
 * @name ngdelay
 * @description
 * # ngdelay
 * Base on http://stackoverflow.com/questions/21121460/angular-directive-encapsulating-a-delay-for-ng-change
 */
var app = angular.module('ngDelay',[]);

app.directive('ngDelay', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        scope: true,
        compile: function (element, attributes) {
            var expression = attributes['ngChange'];
            if (!expression)
                return;
            attributes['ngChange'] = '$$delay.execute()';
            return {
                pre: function (scope, element, attributes) {
                    scope.$$delay = {
                        expression: expression,
                        delay: scope.$eval(attributes['ngDelay']),
                        execute: function () {
                            var state = scope.$$delay;
                            state.then = Date.now();
                            $timeout(function () {
                                if (Date.now() - state.then >= state.delay)
                                    scope.$eval(expression);
                            }, state.delay);
                        }
                    };
                }
            }
        }
    };
}]);
