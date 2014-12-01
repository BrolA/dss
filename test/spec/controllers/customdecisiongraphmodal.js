'use strict';

describe('Controller: CustomdecisiongraphmodalctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dssApp'));

  var CustomdecisiongraphmodalctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomdecisiongraphmodalctrlCtrl = $controller('CustomdecisiongraphmodalctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
