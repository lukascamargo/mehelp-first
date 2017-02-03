var mehelpApp = angular.module('mehelpApp',['ngRoute','services','directives']);

mehelpApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider.when('/listAula', {
      templateUrl : 'views/aulas.html',
      controller : 'AulaController'
   }).when('/', {
       templateUrl : 'views/login.html',
       controller : 'UserController'
    })
   .otherwise ({ redirectTo: '/' });
}]);
