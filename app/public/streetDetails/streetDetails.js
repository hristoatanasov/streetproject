'use strict';

angular.module('strApp.public.streetDetails', [])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/street/:id', {
        templateUrl: 'app/public/streetDetails/streetDetails.html',
        controller: 'streetDetailsController'
    });
}])

.controller('streetDetailsController', ['$scope', '$routeParams', 'streetsService', function ($scope, $routeParams, streetsService) {
   $scope.street = {};
   
   streetsService.getStreets().success(function(data){
      for(var i = 0; i < data.length; i++) {
         if (data[i].Id == $routeParams.id) {
            $scope.street = data[i];
            break;
         }
      }
   });
}]);