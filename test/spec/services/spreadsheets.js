'use strict';

describe('Service: spreadsheets', function () {

  // load the service's module
  beforeEach(module('androidArduinoApp'));

  // instantiate service
  var spreadsheets;
  beforeEach(inject(function (_spreadsheets_) {
    spreadsheets = _spreadsheets_;
  }));

  it('should do something', function () {
    expect(!!spreadsheets).toBe(true);
  });

});
