app.controller("FindNewCtrl", ["$scope", "$http",
  
  function($scope,$http) {
    var movieObj;
    $scope.searchOMDB = function() {
      console.log("I see searchString =",$scope.findNewSearchString.replace(/ /g,"+"));
      $http({
        method: "GET",
        url: "http://www.omdbapi.com/?t=" + $scope.findNewSearchString.replace(/ /g,"+")
      })
      .then(function(objReceived) {
        movieObj = objReceived.data;
        console.log("got",movieObj);
        $("#leftBox").html(`<img src='${movieObj.Poster}'>`);
      }),
      function(error) {
        console.log("mayhem!!");
      }
    };
    $scope.addToTracking = function() {
      console.log("movie is being moved to tracking");
      $("#leftBox").html("");
      $("#centerBox").html(`<img src='${movieObj.Poster}'>`);
    };
    $scope.addToWatched = function() {
      console.log("movie is being moved to watched");
      $("#centerBox").html("");
      $("#rightBox").html(`<img src='${movieObj.Poster}'>`);
    };
  }
]);