var app = angular.module('stockApp');
app.directive("navbarStock", function(){
    return{
        template : '<a class="btn btn-success" href="#/partialsViews/add.html"><span class="glyphicon glyphicon-plus"></span>Agregar Producto</a>',
        restrict : "E" //Class
    };
});

app.directive("productGrid",function(){
    return{
        template : true,
        restrict : "E", //Element Name
        templteUrl : 'partialsViews/productGrid.html'
    }
})


//Restrict
//E : Element Name
//A : Attribute
//C : Class
//M : Comment
//Por defecto el valor es EA, por lo tanto Element Name y Attribute pueden invocar la directiva.
