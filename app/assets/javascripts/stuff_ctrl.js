(function () {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {

    $scope.message = "Hello!";
    $scope.task1 = "Feed the cat";
    $scope.task2 = "Feed the baby";
    $scope.task3 = "Feed the car";
    $scope.task4 = " ";
     
    $scope.reviews = [
      "AngularJS is awesome.",
      "AngularJS is weird",
      "I don't like AngularJS but I do like it."
    ];

    window.$scope = $scope;    
  });
})();