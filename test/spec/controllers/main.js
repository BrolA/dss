'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('swdApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a decisionGraph field to scope', function () {
    expect(scope.decisionGraph).toBeDefined();
  });

  it('shoud attach a topic filed to decisionGrap', function(){
    expect(scope.decisionGraph.topic).toBeDefined();
  });

  it('should attach a currentNode field to scope', function () {
    expect(scope.currentNode).toBeDefined();
  });

  it('should attach a reset method to scope', function(){
    expect(scope.reset).toBeDefined();
  });

  it('should set a decissionGraph value to currentNode in scope', function(){
    expect(scope.currentNode).toEqual(scope.decisionGraph);
  });

  it('should attach a makeDecision method to scope', function(){
    expect(scope.makeDecision).toBeDefined();
  });

  it('should change currentNode after executing makeDecision method', function(){
    var test = angular.copy(scope.currentNode);
    scope.makeDecision(0);
    expect(scope.currentNode).not.toEqual(test);
  });

//it('should call at least one time reset method in scope',function(){
//  spyOn(scope,'reset');
//  expect(scope.reset).toHaveBeenCalled();
//});
  //it('should attach a makeDecision method with one param in scope', function(){
  //  spyOn(scope.makeDecision())
  //  expect(scope.makeDecision).toHaveBeenCalled();
  //});
});
