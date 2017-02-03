// Módulo de Serviços
// Services Module

var services = angular.module('services', []);

// Data atual formatada (Brasil)
// Current Date Formatted (Brasil)

services.factory('auth', function() {
  var authService = {};
  authService.getUser = function() {
      return  {
        headers : {
            'Autorization' : JSON.parse(window.localStorage.getItem('user')).token,
            'userId' : JSON.parse(window.localStorage.getItem('user')).user_id,
            'username' : JSON.parse(window.localStorage.getItem('user')).user_username
          }
      };
  };

  return authService;
});