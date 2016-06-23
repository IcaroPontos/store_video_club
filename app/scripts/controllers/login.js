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
        name: "",
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


      ////////////////////////////////////// END
      $scope.LoginCtrl = ctrl;
  });
