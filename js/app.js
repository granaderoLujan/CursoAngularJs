'use strict';
var app = angular.module('stockApp', ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/stock/list", {
        templateUrl : "partialsViews/productGrid.html",
        controller:'StockController'
    })
    .when("/stock/add", {
        templateUrl : "partialsViews/add.html",
        controller: 'StockController'
    })
});