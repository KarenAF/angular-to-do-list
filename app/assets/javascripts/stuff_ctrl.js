(function () {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {

    $scope.message = "Hello!";
    $scope.tasks = [
      "Feed the cat",
      "Feed the baby",
      "Feed the car",
      " "
    ]
    $scope.reviews = [
      "AngularJS is awesome.",
      "AngularJS is weird",
      "I don't like AngularJS but I do like it."
    ];

    window.$scope = $scope;    
  });
})();