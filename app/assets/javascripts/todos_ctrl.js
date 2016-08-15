/*global angular */

(function() {
  angular.module('app').controller('todosCtrl', function($scope) {
    $scope.todos = [
      'Take out the garbage',
      'Mow the lawn',
      'Be sure to drink'
     ];

$scope.addTodo = function(inputTodo) {
  if (inputTodo !== '') {
    $scope.todos.push(inputTodo);
    $scope.newTodo = '';
  }
};

$scope.completeTask = function(inputIndex) {
  $scope.todos.splice(inputIndex, 1);
};
});
})();

(function () {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {

    $scope.message = "Hello!";
    $scope.tasks = [
      "Feed the cat",
      "Feed the baby",
      "Feed the car"
    ]
    $scope.reviews = [
      "AngularJS is awesome.",
      "AngularJS is weird",
      "I don't like AngularJS but I do like it."
    ];

   $scope.newTask = ""; 

   $scope.addTask = function(input) {
    if(input !== "") {
      $scope.tasks.push(input);
      };
    $scope.newTask = ""  
    };    

   $scope.addReview = function(inputReview) {
    // Doesn't have to be called inputreview. it's just the name of the argument.
      $scope.reviews.push(inputReview);
    };

    window.$scope = $scope;    
  });
})();