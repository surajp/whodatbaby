'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('whodatbaby.services', []).
  factory('twitterFeedService',function($http){
	var wdb_twitter = {}; 
	wdb_twitter.getBabyNames=function(id,friend){
		alert('getting baby '+id+' '+friend);
		return	$http({
			url: 'http://localhost:8000/getbaby/'+id+'/'+friend,
			method: 'GET'
		});
	}
	return wdb_twitter;
  });
