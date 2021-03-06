'use strict';


// Declare app level module which depends on filters, and services
angular.module('whodatbaby', [
  'ngRoute',
//'myApp.filters',
  'whodatbaby.services',
//'whodatbaby.directives',
  'whodatbaby.controllers'
]).
config(['$routeProvider', function($routeProvider) {
//$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginController'});
  $routeProvider.when('/getBabies/:id/:friend', {'templateUrl': 'partials/babies.html', 'controller': 'babyNameController'}).
when('/home', {'templateUrl': 'partials/home.html'}).
when('/parents/:id', {'templateUrl': 'partials/parents.html', 'controller': 'parentNameController'}).
when('/baby/:id', {'templateUrl': 'partials/baby.html', 'controller': 'babyDetailsController'}).
otherwise({redirectTo:"/home"});
}]);
