'use strict';

/* Controllers */

angular.module('whodatbaby.controllers', []).
  controller('babyNameController', function($scope,$routeParams,twitterFeedService) {
  	alert('baby name controller');
	$scope.babyNames=[];
	$scope.id=$routeParams.id;
	$scope.friend=$routeParams.friend;
	twitterFeedService.getBabyNames($scope.id,$scope.friend).success(function(response){
		alert("name of baby "+response);
		$scope.babyNames=response.name;
	})
	
  }).
  controller('parentNameController', function($scope,$routeParams,twitterFeedService) {
  	alert('parents name controller');
	$scope.parentNames=[];
	$scope.id=$routeParams.id;
	twitterFeedService.getParentNames($scope.id).success(function(response){
		alert("name of parent "+response);
		$scope.parentNames=response.name;
	})
	
  });
