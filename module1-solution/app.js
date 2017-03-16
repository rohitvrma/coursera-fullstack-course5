(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckController', LunchCheckController)
.filter('loves', LovesFilter);

LunchCheckController.$inject = ['$scope', 'lovesFilter'];

function LunchCheckController($scope, lovesFilter) {
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

    $scope.lunchItems = lovesFilter($scope.lunchItems);
  };
}

function LovesFilter(){
  return function(input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  }
}

})();
