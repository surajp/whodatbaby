'use strict';

/* Controllers */

angular.module('whodatbaby.controllers', []).
  controller('babyNameController', function($scope,twitterFeedService) {
	$scope.babyNames=[];
	twitterFeedService.getBabyNames().success(function(response){
		$scope.babyNames=response.<fill later>;
	}
	
  });
