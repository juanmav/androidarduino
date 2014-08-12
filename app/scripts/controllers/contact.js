'use strict';

/**
 * @ngdoc function
 * @name androidArduinoApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the androidArduinoApp
 */
var app = angular.module('AndroidArduino')
app.controller('ContactCtrl', function ($scope, MailService, $ionicLoading, $ionicPopup) {
    console.log('Controller contacto up!');

    $scope.m = {};

    $scope.click = function(){

        var mail = {
            from: 'AndroidArduino <postmaster@sandbox27095345f247414da9eef8fab53dc717.mailgun.org>',
            to: 'Juan Manuel Vicente <juanma.v82@gmail.com>',
            subject: 'Mensaje Android Arduino de ' + $scope.m.name + ' ' + $scope.m.lastname,
            text: 'Responder al mail: ' + $scope.m.email + ' Comentarios: ' + $scope.m.comments
        }

        $ionicLoading.show({ template: 'Enviando...'});

        MailService.mail(mail, function(sucess){
            console.log(sucess);
            $scope.m = {};
            $ionicLoading.hide();
            $ionicPopup.alert({
                title: 'Enviado',
                template: 'Mensaje Recibido! Te estaremos contestando a la brevedad!'
            });
        }, function(error){
            console.log(error);
            $ionicLoading.hide();
            $ionicPopup.alert({
                title: 'Error',
                template: 'No se pudo enviar el Mensaje!'
            });
        });
    }
});
