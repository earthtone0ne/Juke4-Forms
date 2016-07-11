'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

  // nothing to see here for now… state transitions happening with ui-sref!
   var allPlaylists = function () {
            return PlaylistFactory.fetchAll();
         }
   allPlaylists().then(function(playlists){
      $scope.playlists = playlists;
   })

});
