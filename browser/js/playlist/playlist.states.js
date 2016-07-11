'use strict';

juke.config(function($stateProvider){

   $stateProvider.state('newPlaylist', {
      url: '/playlists/new',
      templateUrl: '/js/playlist/templates/playlist-form.html',
      controller: 'PlaylistCtrl'

   });
   $stateProvider.state('playlists', {
      url: '/playlists',
      template: '<p> playlists!</p'
   })
});
