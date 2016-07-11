'use strict';

juke.factory('PlaylistFactory', function($http){
   var PlaylistFactory = {};

   function getData (res) { return res.data; }

   PlaylistFactory.create = function (data) {
      $http.post('/api/playlists/', data)
      .then(getData);
   };

  PlaylistFactory.fetchAll = function () {
    return $http.get('/api/playlists')
    .then(getData);
  };

   return PlaylistFactory;
});
