'use strict';

/**
 * @ngdoc function
 * @name androidArduinoApp.controller:ButtonsCtrl
 * @description
 * # ButtonsCtrl
 * Controller of the androidArduinoApp
 */
var app = angular.module('AndroidArduino');

app.controller('ButtonsCtrl', function ($scope, $ionicPopup, ArduinoService, $ionicLoading, $filter) {
    $scope.retreive = function() {
        $ionicLoading.show({ template: 'Loading...'});
        ArduinoService.get({}, function (success) {
            $scope.settingsList = success;
            // Se adapta el valor del item al Toggle.
            angular.forEach($filter('filter')(success, 'dig_'), function (item) {
                if (item.state == 1) {
                    item.checked = true;
                }
            });
            $ionicLoading.hide();
        }, function (error) {
            $scope.showAlert();
            $ionicLoading.hide();
        });
    };
    $scope.retreive();
    $scope.refresh = function (button){
        $scope.retreive();
    }
    $scope.pushPwmChange = function(item){
        console.log(item.resource_name);
        console.log(item.state);
        //console.log(slider.value);
        //item.state = slider.value;
        $ionicLoading.show({ template: 'Loading...'});
        ArduinoService.update(item, function (success) {
            $ionicLoading.hide();
        }, function (error) {
            $ionicLoading.hide();
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
        $ionicLoading.show({ template: 'Loading...'});
        ArduinoService.update(copy, function (success) {
            //console.log(success);
            $ionicLoading.hide();
        }, function (error) {
            //console.log(error);
            $ionicLoading.hide();
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
