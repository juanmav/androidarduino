'use strict';

describe('Service: arduinoService', function () {

  // load the service's module
  beforeEach(module('androidArduinoApp'));

  // instantiate service
  var arduinoService;
  beforeEach(inject(function (_arduinoService_) {
    arduinoService = _arduinoService_;
  }));

  it('should do something', function () {
    expect(!!arduinoService).toBe(true);
  });

});
