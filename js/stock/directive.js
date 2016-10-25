'use strict';
(function(){
var app = angular.module('stockModule');
app.directive("crudActions", function(){
    return{
        controller : function($scope, stockGlobals){
            $scope.moduleName = stockGlobals.moduleName;
        },
        template : '<a class="btn btn-success" href="/#/{{moduleName}}/add"><span class="glyphicon glyphicon-plus"></span>Agregar Producto</a>',
        restrict : "E" //Class
    };
});

app.directive("productGrid",function(){
    return{
        replace : true,
        restrict : "E", //Element Name
        templateUrl : 'partialViews/stock/grid.html',
        controller: function($scope){

        },
        link : function($scope, element, attrs){ }
    };
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
			restrict : "E",//Restringe a nivel elemento HTML
			template : '<p><a href="/#/stock/add">+ Agregar Producto</a> | <a href="#" ng-click="print()">Imprimir</a></p>'
		};
	}]);
    */