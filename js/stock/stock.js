'use strict';
angular.module('stockModule')
.controller('StockController', ['$scope', 'StockService', function($scope, StockService){
  $scope.selectedVendor = '';
  $scope.vendors = [];
  $scope.products = [];
	  
	  var init = function() {
		StockService.GetAllProducts().then(function(response){      
			$scope.products = response.data;
		});
    StockService.GetAllVendors(),then(function(response){
      $scope.vendors = response.data;
    })
    };
	  
	  init();

}]);