'use strict';

/**
 * @ngdoc function
 * @name dssApp.controller:CustomDecisionGraphModalCtrl
 * @description
 * # CustomDecisionGraphModalCtrl
 * Controller of the dssApp
 */
angular.module('dssApp')
  .controller('CustomDecisionGraphModalCtrl', [ '$scope', '$modalInstance', 'decisionGraph', function ( $scope, $modalInstance, decisionGraph ) {
      $scope.decisionGraph = decisionGraph;


      $scope.ok = function () {
        $modalInstance.close(angular.fromJson($scope.decisionGraph));
      };

      $scope.cancel = function () {
        $modalInstance.dismiss({});
      };
  }]);
