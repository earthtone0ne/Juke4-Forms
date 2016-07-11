'use strict';

juke.controller('PlaylistCtrl', function($scope, $log, PlaylistFactory){
   $scope.logIt= function(){
      PlaylistFactory.create($scope.playlist);
   $scope.playlistForm.$setPristine();
   $scope.playlistForm.$setUntouched();
   $scope.playlist.name = "";
   };
});
