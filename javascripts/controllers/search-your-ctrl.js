app.controller("SearchYourCtrl", ["$scope", "load-collection",
  function($scope,loadCollection) {
    $scope.showWatched = true;  // initialize
    $scope.showWatchedButton = false;  // initialize

    $scope.toggleWatched = function() {
        $scope.showWatched = !$scope.showWatched;
        $scope.showWatchedButton = !$scope.showWatchedButton;
    }

    loadCollection.then(
      function(movieArray) {
        $scope.movies = movieArray;
      },
      function () {

      }
    );

    $scope.myCustomFilter = function(movie) {
        return movie.watched === $scope.showWatched;
    }
  }
]);