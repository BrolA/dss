'use strict';

/**
 * @ngdoc function
 * @name dssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dssApp
 */
angular.module('dssApp').controller('MainCtrl', ['$scope', '$modal', '$log', 'decisionGraph', function ($scope, $modal, $log, decisionGraph) {

    $scope.defaultDecisionGraph = decisionGraph.getDefaultGraph();
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
