const app = angular.module("App", []);

app.controller("githubData", function($scope, $http){
  $scope.fetchData = function() {
    $http.get(`https://api.github.com/users/${$scope.query}`)
    .then(function(response) {
      $scope.result = response.data;
      $scope.showAfterFetch = true;
      $scope.showAfterFetch = true;
      if($scope.result.hireable) {
        $scope.showHireable = true;
      }
      else if($scope.result.email !== null) {
        $scope.showEmail = true;
      }
      else if($scope.result.company !== null) {
        $scope.showCompany = true;
      }
    });
  }
});