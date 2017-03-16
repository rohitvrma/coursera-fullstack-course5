(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchItemsMessage = "";
  $scope.checkLunchItems = function () {
    var items = [];
    if($scope.lunchItems) {
        items = $scope.lunchItems.split(',')
    }
    if(items.length > 0) {
      if(items.length > 3) {
        $scope.lunchItemsMessage = "Too much!";
      } else {
        $scope.lunchItemsMessage = "Enjoy!";
      }
    } else {
        $scope.lunchItemsMessage = "Please enter data first";
    }
  };
}

})();
