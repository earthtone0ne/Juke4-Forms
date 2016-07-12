'use strict';

juke.config(function($stateProvider){

   $stateProvider.state('newPlaylist', {
      url: '/playlists/new',
      templateUrl: '/js/playlist/templates/playlist-form.html',
      controller: 'PlaylistCtrl'

   });

   $stateProvider.state('showPlaylist', {
      url: '/playlists/:listId',
      templateUrl: '/js/playlist/templates/playlist-show.html',
      resolve: {
       thePlaylist: function (AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.albumId);
        }

      }
   });
});
