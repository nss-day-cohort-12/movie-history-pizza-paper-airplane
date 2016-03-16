"use strict";

app.controller("RootCtrl", ["$scope",
  function() {
    console.log("RootCtrl is running");
  }
]);

// ,"$http","song-storage",

//   function($scope,$http,songStorage) {
//     var doPost = function() {
//       $http({
//         url: "https://sizzling-heat-8987.firebaseio.com/songs/.json",
//         method: "POST",
//         data: JSON.stringify({
//           id:  $scope.songs.length,
//           name: $scope.songName,
//           artist: $scope.artistName,
//           album: $scope.albumName
//         })
//       }).then(function() {
//         console.log("posted",$scope.songName);
//       });
//     };
//     $scope.addStuff = function() {
//       songStorage.then(function(songArray) {
//         $scope.songs = songArray;
//         $scope.songs.push({
//           id:  $scope.songs.length + 1,
//           name: $scope.songName,
//           artist: $scope.artistName,
//           album: $scope.albumName
//         });
//         doPost();
//       });
//       console.log("added");
//     };
//   }

// ]);