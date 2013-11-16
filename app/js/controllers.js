'use strict';

/* Controllers */

angular.module('whodatbaby.controllers', []).
  controller('babyNameController', function($scope,$routeParams,twitterFeedService) {
	$scope.babyNames=[];
	$scope.id=$routeParams.id;
	$scope.friend=$routeParams.friend;
	twitterFeedService.getBabyNames($scope.id,$scope.friend).success(function(response){
		$scope.babyNames=response.name;
	}
	
  });
