(function () {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {

    $scope.message = "Hello!";
    $scope.task1 = "Feed the cat";
    $scope.task2 = "Feed the baby";
    $scope.task3 = "Feed the car";
        
  });
})();