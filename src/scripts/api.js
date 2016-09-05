
function fetch($http, $scope, fechAPI){
  $http.get("http://localhost:5000/api/v1/" + fechAPI)
  .then(function(response){ 
      $scope.related = response.data; 
    //   console.log($scope.related);
    });
}