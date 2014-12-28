'use strict';

/**
 * @ngdoc function
 * @name androidArduinoApp.controller:BluetoothCtrl
 * @description
 * # BluetoothCtrl
 * Controller of the androidArduinoApp
 */
var app = angular.module('AndroidArduino');

app.controller('BluetoothCtrl', function ($scope, $ionicPopup) {

    console.debug("llamando a listado");

    $scope.devices = [{
        "class": 276,
        "id": "10:BF:48:CB:00:00",
        "address": "10:BF:48:CB:00:00",
        "name": "Nexus 7 - cambie"
    }, {
        "class": 7936,
        "id": "00:06:66:4D:00:00",
        "address": "00:06:66:4D:00:00",
        "name": "RN42"
    }];

    try {
        bluetoothSerial.list(function (success) {
            console.debug(success);
            $scope.devices = success;
        }, function (failure) {
            console.debug('Fallo Obtencion de lista');
            $scope.devices = [
                {"name": "falle"}
            ];
        });
    } catch(err) {
        console.debug('Estaremos en el browser?');
    }

    $scope.connect = function(device){
        console.debug('Conectando a Device');
        console.debug(device.name);
        try {
            bluetoothSerial.connect(
                device.address,
                function (connectSuccess) {
                    $ionicPopup.alert({
                        title : 'Conectado',
                        template : 'Conexion exitosa!'
                    });
                },
                function (connectFailure) {

                });
        } catch (err) {
            console.debug('Estaremos en el browser?');
        }
    }

    $scope.disconnect = function(device){
        console.debug('Desconectando a Device');
        console.debug(device.name);
        try {
            bluetoothSerial.disconnect(function(success){
                $ionicPopup.alert({
                    title : 'Desconectado',
                    template : 'DesConexion exitosa!'
                });
            });
        } catch (err){
            console.debug('Estaremos en el browser?');
        }
    }

    $scope.led = false;

    $scope.toggle = function (led){
        console.debug(!led);
        try {
            if (!led){
                bluetoothSerial.write('a');
            } else {
                bluetoothSerial.write('A');
            }
        } catch (erro) {
            console.debug('Estaremos en el browser?');
        }
    };

});
