'use strict';

/**
 * @ngdoc function
 * @name androidArduinoApp.controller:ButtonsCtrl
 * @description
 * # ButtonsCtrl
 * Controller of the androidArduinoApp
 */
var app = angular.module('AndroidArduino');

app.controller('ButtonsCtrl', function ($scope, $ionicPopup, ArduinoService) {

    ArduinoService.get({}, function (success) {
        console.log(success);
        $scope.settingsList = success;
    }, function (error) {
        console.log(error);
    });

    /*$scope.settingsList = [
     { id: 3, text: "Wireless", checked: true },
     { id: 3, text: "GPS", checked: false },
     { id: 3, text: "Bluetooth", checked: false }
     ];*/

    $scope.pushDigitalChange = function (item) {
        console.log(item)
        var copy = {};
        copy.resource_name = item.resource_name;
        if (item.checked == false) {
            item.state = 1;
            copy.state = 1;
        } else {
            item.state = 0;
            copy.state = 0;
        }
        ArduinoService.update(copy, function (success) {
            //console.log(success);
        }, function (error) {
            //console.log(error);
            $scope.showAlert();
        });
    }

    // An alert dialog
    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Error',
            template: 'No se pudo actualizar el valor!'
        });
    };

    $scope.less = function (item) {
        if (item.state > 0) {
            item.state--;
        }
        ArduinoService.update(item, function (success) {
        }, function (error) {
            $scope.showAlert();
        });
    }

    $scope.more = function (item) {
        if (item.state < 255) {
            item.state++;
        }
        ArduinoService.update(item, function (success) {

        }, function (error) {
            $scope.showAlert();
        });
    }
});
