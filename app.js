(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',AppController);
  AppController.$inject('$scope');
  function AppController($scope){
    $scope.items = '';
    $scope.countItems = function(){
      var items = $scope.items.split(',');
      var len = items.length;
      if ($scope.items == ''){
        $scope.msg = 'Please enter data first.';

      }
      else if(len > 3){
          $scope.msg = 'Too much!';
      }
      else if(len <= 3 && len >= 1){
          $scope.msg = 'Enjoy!';
      }

    }
  }
})();
