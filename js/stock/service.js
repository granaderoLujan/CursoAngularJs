'use strict';

angular.module('stockModule')
.factory('StockService', ['$http', 'appGlobals', function ($http, appGlobals) {
    var service = {};
    
    var serviceBase = appGlobals.appApiUri; //appGlobals se encuentra en el config.js raíz. 
    
    service.GetAllProducts = function () {
        return $http.get("/json-data/products.json") //json generado a mano para el ejemplo. 
                   .then(function (response) {
                       return response;
                   });
    };

  service.GetAllVendors = function () {
        return $http.get("/json-data/vendors.json") //json generado a mano para el ejemplo. 
                   .then(function (response) {
                       return response;
                   });
    };

    return service;

}]);