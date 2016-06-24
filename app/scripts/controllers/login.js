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

      ctrl.view = '/views/login/_login.html';

      ctrl.model = {
        userName: "",
        password: "",
        email: "",
        phone: "",
        address: "",
        membresia: ""
      };

      ctrl.membresia = [
        'Semanal',
        'Mensual',
        'Anual',
        'Free'
      ];

      ctrl.login = function(){
        console.log(ctrl.model);
      };

      ctrl.register = function(){
        console.log(ctrl.model);
      };

      ////////////////////////////////////// END
      $scope.LoginCtrl = ctrl;
  });
