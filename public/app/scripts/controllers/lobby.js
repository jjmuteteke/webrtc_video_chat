'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:LobbyCtrl
 * @description
 * # LobbyCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('LobbyCtrl', function ($location,$scope) {
    $scope.val = false;
    $scope.randomR = function()
    {
       $location.path('/room'); 
    }
    $scope.joinR = function() {
     var roomId =  $scope.textValue;
     if(roomId == undefined)
     {
       $scope.val = !$scope.val;;
     }
     else
     {
      $location.path('/room/' + roomId);
     }
    }
    
  });
