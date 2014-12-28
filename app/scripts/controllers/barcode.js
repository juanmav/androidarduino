'use strict';

/**
 * @ngdoc function
 * @name androidArduinoApp.controller:BarcodeCtrl
 * @description
 * # BarcodeCtrl
 * Controller of the androidArduinoApp
 */
var app = angular.module('AndroidArduino');
app.controller('BarcodeCtrl', function ($scope,$firebase) {

    var ref = new Firebase("https://qrreader.firebaseio.com/delivery");
    var sync = $firebase(ref);

    $scope.data = {};

    $scope.enviar = false;

    $scope.read = function () {
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                $scope.data.code = result.text;
                navigator.geolocation.getCurrentPosition(function(position) {
                    $scope.data.lon = position.coords.longitude;
                    $scope.data.lat = position.coords.latitude;
                    $scope.enviar = true;
                }, function(error){
                    alert('code: '    + error.code    + '\n' +
                        'message: ' + error.message + '\n');
                });
            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    };

    $scope.send = function(){
        sync.$push(
            {
                code: $scope.data.code,
                longitude : $scope.data.lon,
                latitude : $scope.data.lat
            }
        ).then(
            function(newChildRef) {
                console.log("added record with id " + newChildRef.name());
                $scope.enviar = false;
                $scope.data = {};
            });
    }
});
