'use strict';

/**
 * @ngdoc service
 * @name androidArduinoApp.arduinoService
 * @description
 * # arduinoService
 * Service in the androidArduinoApp.
 */
var app = angular.module('AndroidArduino')

app.service('ArduinoService', function ($resource) {
    return $resource('http://190.16.89.88:7999/:resource_name/:state', {}, {
        update : {
            method: 'GET',
            params: {resource_name: '@resource_name', state: '@state'}
        },
        get : {
            method: 'GET',
            url : 'http://190.16.89.88:7999/json/',
            isArray : true
        }
    });
});
