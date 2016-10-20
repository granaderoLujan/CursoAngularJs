'use strict';
angular.module('dashboardModule')
.controller('dashboardModule', function($scope){
    $scope.tiles = [{
        id: 1,
        label : 'Products',
        url : '/#/stock/list'
    },
    {
        id : 2,
        label : 'Publicar Producto',
        url : '/#/stock/publish'
    }];
});