'use strict';

juke.controller('PlaylistCtrl', function($scope, $log){
   $scope.logIt= function(){
      $log.log($scope.playlist)
   }
});
