'use strict';

//http://stackoverflow.com/questions/14833326/how-to-set-focus-on-input-field
angular.module('strApp.autoFocus', [])
.directive('autoFocus', function($timeout) {
    return {
        restrict: 'AC',
        link: function(_scope, _element) {
            $timeout(function(){
                _element[0].focus();
            }, 0);
        }
    };
});
