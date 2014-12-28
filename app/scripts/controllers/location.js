'use strict';

/**
 * @ngdoc function
 * @name androidArduinoApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the androidArduinoApp
 */
var app = angular.module('AndroidArduino');

app.controller('LocationCtrl', function ($scope, $ionicPopup) {

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        var alertPopup = $ionicPopup.alert({
            title: 'Alert',
            template:
                'Latitude: '          + position.coords.latitude          + '</br>' +
                'Longitude: '         + position.coords.longitude         + '</br>' +
                'Altitude: '          + position.coords.altitude          + '</br>' +
                'Accuracy: '          + position.coords.accuracy          + '</br>' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '</br>' +
                'Heading: '           + position.coords.heading           + '</br>' +
                'Speed: '             + position.coords.speed             + '</br>' +
                'Timestamp: '         + position.timestamp                + '</br>'
        });
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);


    var db = openDatabase('mydb', '1.0', 'my first database', 4 * 1024 * 1024);

    db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
        tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")');
        tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
    });


});
