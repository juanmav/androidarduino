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

    $scope.value = 0;

    ArduinoService.get({}, function (success) {
        console.log(success);
        $scope.settingsList = success;
    }, function (error) {
        $scope.showAlert();
    });

    $scope.pushPwmChange = function(slider, item){
        console.log('adadasdas');
        console.log(item.resource_name);
        console.log(slider.value);
        item.state = slider.value;
        ArduinoService.update(item, function (success) {
        }, function (error) {
            $scope.showAlert();
        });
    }

    $scope.pushDigitalChange = function (item) {
        var copy = {};
        copy.resource_name = item.resource_name;
        if (item.checked !== true) {
            item.state = 1;
            copy.state = 1;
        } else {
            console.log('off');
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
});
