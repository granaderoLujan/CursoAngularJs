'use strict';
(function(){
var app = angular.module('stockApp');
app.directive("navbarStock", function(){
    return{
        template : '<a class="btn btn-success" href="/#/stock/add.html"><span class="glyphicon glyphicon-plus"></span>Agregar Producto</a>',
        restrict : "E" //Class
    };
});

app.directive("productGrid",function(){
    return{
        replace : true,
        restrict : "E", //Element Name
        templteUrl : 'partialsViews/stock/list.html'
    }
});
})();

//Restrict
//E : Element Name
//A : Attribute
//C : Class
//M : Comment
//Por defecto el valor es EA, por lo tanto Element Name y Attribute pueden invocar la directiva.

// Alternativa a navbarStock.
/*	app.directive("crudActions", ['stockGlobals', function(stockGlobals) {
		
		return {
			controller: function($scope, stockGlobals){
				$scope.moduleName = stockGlobals.moduleName;
			},
			restrict : "E",//Restringe a nivel elemento HTML
			template : '<p><a href="/#/{{moduleName}}/add">+ Agregar Producto</a> | <a href="#" ng-click="print()">Imprimir</a></p>'
		};
	}]);
    */