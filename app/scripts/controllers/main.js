'use strict';

/**
 * @ngdoc function
 * @name dssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dssApp
 */
angular.module('dssApp').controller('MainCtrl', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {

    $scope.defaultDecisionGraph = {
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

    $scope.decisionGraph = {};

    $scope.currentNode = {};

    $scope.makeDecision = function (index) {
        if (typeof index !== 'number') {
            throw TypeError();
        }
        if ($scope.currentNode.decisions) {
            $scope.currentNode = $scope.currentNode.decisions[index];
        }
    };

    $scope.reset = function () {
        $scope.currentNode = angular.copy($scope.decisionGraph);
    };

    $scope.useDefaultDecisionGraph = function () {
        $scope.decisionGraph = angular.copy($scope.defaultDecisionGraph);
    };

    $scope.openCustomDecisionGraphInput = function () {

        var modalInstance = $modal.open({
            controller: 'CustomDecisionGraphModalCtrl',
            templateUrl: 'views/customdecisiongraphmodal.html',
            size: 'lg',
            resolve: {
                decisionGraph: function () {
                    return angular.toJson($scope.decisionGraph);
                }
            }

        });

        modalInstance.result.then(
            function (decisionGraph) {
                $scope.decisionGraph = decisionGraph;
            }, function () {
            });
    };

    $scope.useDefaultDecisionGraph();
    $scope.reset();
}]);
