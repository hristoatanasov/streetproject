'use strict';

angular.module('strApp.public.home', [])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'app/public/home/home.html',
        controller: 'homeController'
    });
}])

.controller('homeController', ['$scope', 'streetsService', function ($scope, streetsService) {
   $scope.streets = [];
   $scope.searchText = "";
   
   streetsService.getStreets().success(function(data){
      $scope.streets= data;
   });
}]);