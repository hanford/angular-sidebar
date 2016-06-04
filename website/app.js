var angular = require('angular')

angular.module('exampleApp', [
    require('../')
  ])
  .controller('controller', function ($scope) {
    $scope.loaded = 'hello world'
    $scope.open = false

    $scope.openNav = function () {
      $scope.$broadcast('openSidebar')
    }
  })
