var strApp = angular.module('strApp', [
  'ngRoute',
  
  'strApp.autoFocus',
  'strApp.streetsService',
  
  'strApp.index',
  
  'strApp.public.home',
  'strApp.public.streetDetails'
])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({ redirectTo: '/home' });
    
    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
}]);