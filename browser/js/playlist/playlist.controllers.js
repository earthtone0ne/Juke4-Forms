'use strict';

juke.controller('NewPlaylistCtrl', function($scope, $log, PlaylistFactory){
   $scope.logIt= function(){
      PlaylistFactory.create($scope.playlist)
      .then (function(playlist){
         // $scope.playlistForm.$setPristine();
         // $scope.playlistForm.$setUntouched();
         // $scope.playlist.name = "";
         $state.go('showPlaylist', {playlistId: playlist.id});
         return playlist;
      })
      .catch($log.error);

   };

});

juke.controller('PlaylistCtrl', function($scope, $log, PlayerFactory, thePlaylist){
   // $scope.playlist = thePlaylist;thePlaylist
   // PlaylistFactory.fetchById($stateParams.playlistId)
   // .then(function(playlist){
   //    $scope.playlist=playlist;
   // })
   // .catch($log.error);
   $scope.playlist=thePlaylist;
   $scope.isPlaying = function (song) {
      return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
   };
   $scope.getCurrentSong = function () {
      return PlayerFactory.getCurrentSong();
  };
});
