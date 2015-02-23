'use strict';

angular.module('strApp.streetsService', [])
.factory('streetsService', function($rootScope, $http) {
    var streetsService = {};
   
    streetsService.getStreets = function() {
        return $http.get('app/data/streets.json');
    };

    return streetsService;
});