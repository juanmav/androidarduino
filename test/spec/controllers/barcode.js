'use strict';

describe('Controller: BarcodeCtrl', function () {

  // load the controller's module
  beforeEach(module('androidArduinoApp'));

  var BarcodeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarcodeCtrl = $controller('BarcodeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
