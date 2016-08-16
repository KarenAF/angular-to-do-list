(function () {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {

    $scope.message = "Hello!";
    $scope.tasks = [
      "Feed the cat",
      "Feed the baby",
      "Feed the car"
    ];

    $scope.reviews = [
      "AngularJS is awesome.",
      "AngularJS is weird",
      "I don't like AngularJS but I do like it."
    ];

    $scope.addTask = function(input) {
      if(input !== "") {
        $scope.tasks.push(input);
      };
      $scope.newTask = ""  
    };    

    $scope.completeTask = function(inputIndex) {
      // $scope.tasks.splice(inputIndex, 1);
      console.log("Hi");
    };

    $scope.addReview = function(inputReview) {
      // Doesn't have to be called inputreview. it's just the name of the argument.
      $scope.reviews.push(inputReview);
    };

    window.$scope = $scope;    
  });
})();