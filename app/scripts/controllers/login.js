'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('LoginCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      var ctrl = this;

      ctrl.test = "Hola Mundo";
      ctrl.view = '/views/login/_login.html';

      ctrl.option = function(option){

        switch(option){
          case 'register':
                ctrl.view = ctrl.view = '/views/login/_register.html';
                break;
          default:
            ctrl.view = '/views/login/_login.html';
        }
      }


      ////////////////////////////////////// END
      $scope.LoginCtrl = ctrl;
  });
