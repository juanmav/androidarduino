'use strict';

describe('Controller: BluetoothCtrl', function () {

  // load the controller's module
  beforeEach(module('androidArduinoApp'));

  var BluetoothCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BluetoothCtrl = $controller('BluetoothCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
