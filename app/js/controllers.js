/**
 * Controllers
 */

app.controller("Screens.Example.Tab1", function ($scope, $window) {
  // login with Google
  $scope.login = function () {
    $window.chrome.identity.getAuthToken({'interactive': true}, function (token) {
      $scope.token = token;
      $scope.$digest();
    });
  }
});
