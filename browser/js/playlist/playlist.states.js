'use strict';

juke.config(function($stateProvider){

   $stateProvider.state('newPlaylist', {
      url: '/playlists/new',
      templateUrl: '/js/playlist/templates/playlist-form.html',
      controller: 'NewPlaylistCtrl'

   });

   $stateProvider.state('showPlaylist', {
      url: '/playlists/:playlistId',
      templateUrl: '/js/playlist/templates/playlist-show.html',
      //template: '<h2>Playlist!</h2>',
      controller: 'PlaylistCtrl',
      resolve: {
        thePlaylist: function (PlaylistFactory, $stateParams) {
          return PlaylistFactory.fetchById($stateParams.playlistId);
        }

      }
   });
});
