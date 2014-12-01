'use strict';

/**
 * @ngdoc function
 * @name swdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swdApp
 */
angular.module('dssApp').controller('MainCtrl', function ($scope) {

  $scope.decisionGraph = {
    topic: 'Która gra planszowa jest odpowiednia na ten moment.',
    question: 'Czy to gra jest odpowiednia?',
    decisions: [
      {
        label: 'Odpowiedz A',
        question: ' Czy to prawda',
        decisions: [
          {
            label: 'Odpowiedz A',
            answer: 'To jest ostateczna decyzja A'
          }, {
            label: 'Odpowiedz B',
            question: ' Czy to prawda',
            decisions: [
              {
                label: 'Odpowiedz A',
                question: ' Czy to prawda',
                decisions: []
              }, {
                label: 'Odpowiedz B',
                question: ' Czy to prawda',
                decisions: []
              }, {
                label: 'Odpowiedz C',
                question: ' Czy to prawda',
                decisions: []
              }
            ]
          }, {
            label: 'Odpowiedz C',
            question: ' Czy to prawda',
            decisions: []
          }
        ]
      }, {
        label: 'Odpowiedz B',
        question: ' Czy to prawda',
        decisions: []
      }, {
        label: 'Odpowiedz C',
        answer: 'To jest ostateczna decyzja C'
      }
    ]
  };

  $scope.currentNode = {};

  $scope.makeDecision = function (index) {
    if ($scope.currentNode.decisions) {
      $scope.currentNode = $scope.currentNode.decisions[index];
    }
  };

  $scope.reset = function () {
    $scope.currentNode = angular.copy($scope.decisionGraph);
  };

  $scope.reset();
});
