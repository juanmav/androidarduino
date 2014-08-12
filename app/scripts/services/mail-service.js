'use strict';

/**
 * @ngdoc service
 * @name androidArduinoApp.mailService
 * @description
 * # mailService
 * Service in the androidArduino.
 */
var app = angular.module('AndroidArduino');
app.service('MailService', function ($resource) {
    return $resource('', {}, {
        mail : {
            url : 'https://api:key-b3eec5619bee2034295ba636ea7835f0@api.mailgun.net/v2/sandbox27095345f247414da9eef8fab53dc717.mailgun.org/messages',
            method: 'POST',
            params : { key: ':key', // pequenio hack para que no busque la variable :key y la ponga literal.
                from: '@from',
                to: '@to',
                subject: '@subject',
                text: '@text'
            }
        }
    });
});

/*
 curl -s --user 'api:key-b3eec5619bee2034295ba636ea7835f0' \
 https://api.mailgun.net/v2/sandbox27095345f247414da9eef8fab53dc717.mailgun.org/messages \
 -F from='AndroidArduino <postmaster@sandbox27095345f247414da9eef8fab53dc717.mailgun.org>' \
 -F to='Juan Manuel Vicente <juanma.v82@gmail.com>'\
 -F subject='Hello Juan Manuel Vicente' \
 -F text='Congratulations Juan Manuel Vicente, you just sent an email with Mailgun!  You are truly awesome!'
 */