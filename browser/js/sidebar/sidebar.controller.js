'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

   var allPlaylists = function () {
      return PlaylistFactory.fetchAll();
   }

   allPlaylists().then(function(playlists){
      $scope.playlists = playlists;
   })

});
