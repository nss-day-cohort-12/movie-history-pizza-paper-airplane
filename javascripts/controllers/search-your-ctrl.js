app.controller("SearchYourCtrl", ["$scope", "$http",
  
  function($scope,$http) {
    // $scope.searchOMDB = function() {
    //   console.log("I see searchString =",$scope.searchString.replace(" ","+"));
    //   $http({
    //     method: "GET",
    //     url: "http://www.omdbapi.com/?t=" + $scope.searchString.replace(" ","+")
    //   })
    //   .then(function(objReceived) {
    //     console.log("got",objReceived.data);
    //     $("#leftBox").html(`<img src='${objReceived.data.Poster}'>`);
    //   }),
    //   function(error) {
    //     console.log("mayhem!!");
    //   }
    // };
  }
]);