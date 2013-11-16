'use strict';

/* Controllers */

angular.module('whodatbaby.controllers', []).
  controller('babyNameController', function($scope,$routeParams,twitterFeedService) {
	$scope.babyNames=[];
	$scope.id=$routeParams.id;
	$scope.friend=$routeParams.friend;
	twitterFeedService.getBabyNames($scope.id,$scope.friend).success(function(response){
		$scope.babyNames=response.name;
	})
	
  }).
  controller('parentNameController', function($scope,$routeParams,twitterFeedService) {
	$scope.parentNames=[];
	$scope.id=$routeParams.id;
	twitterFeedService.getParentNames($scope.id).success(function(response){
		$scope.parentNames=response.name;
	})
	
  }).
  controller('babyDetailsController', function($scope,$routeParams,twitterFeedService) {
	$scope.babyDetails={};
	$scope.id=$routeParams.id;
	twitterFeedService.getBabyDetails($scope.id).success(function(response){
		$scope.babyDetails=response.baby;
	})
	
  });
