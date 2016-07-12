'use strict';

juke.controller('PlaylistCtrl', function($scope, $log, PlaylistFactory,thePlaylist){
   $scope.logIt= function(){
      PlaylistFactory.create($scope.playlist)
      .then (function(res){
         $scope.playlistForm.$setPristine();
         $scope.playlistForm.$setUntouched();
         $scope.playlist.name = "";
      });

   };
   $scope.isPlaying = function (song) {
      return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
   };
   $scope.getCurrentSong = function () {
      return PlayerFactory.getCurrentSong();
  };
});
