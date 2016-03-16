app.factory("load-collection", function($q, $http) {
  function getCollection() {
    return $q(function(resolve, reject) {
      $http({  // $http returns a promise
        url: "https://pizzapaperairplane.firebaseio.com/movies/.json",
        method: "GET"
      }).
      then(
        function(objectFromJSONFile) {
          var newArray = [];
          for(var key in objectFromJSONFile.data) {
            newArray.push(objectFromJSONFile.data[key]);
          }
          resolve(newArray);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }
  return getCollection();  // returns a Promise to any controller
});