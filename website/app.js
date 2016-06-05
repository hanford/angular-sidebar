var angular = require('angular')

angular.module('exampleApp', [
    require('../')
  ])
  .controller('controller', function ($scope) {
    $scope.openNav = function () {
      $scope.$broadcast('openSidebar')
    }
  })
