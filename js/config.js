'use strict';
var app = angular.module('stockApp');

//Enrutamiento
app.config(function($routeProvider){
    $routeProvider
    .when("/stock/list", {
        templateUrl : "partialViews/list.html",
        controller:'StockController'
    })
    .when("/stock/add", {
        templateUrl : "partialViews/add.html",
        controller: 'StockController'
    })
    .when("/dashboard",{
        templateUrl : "partialViews/dashboard/index.html",
        controller : "DashboardController"
    })
    .when("/account/login",{
        templateUrl : "partialViews/account/login.html",
        controller : "AccountController"
    })
    .otherwise({rediretTo : '/dashboard'});

    console.log("Configuration del módulo");
    
});


/*
Auth0
*/ 
app.config(function(authProvider) {

    // routing configuration and other stuff
    // ...
    authProvider.init({
      domain: 'granadero.auth0.com',
      clientID: 'Dqda5gvL5KjM4DqBfr5k22ZedDbPfvqp',
      loginUrl: '/account/login'
    });
  })

//Constantes de la aplicaci�n
app.constant('appGlobals', {
    appName: 'Stock App | AngularJs',
    appVersion: 'v0.1',
	appApiUri: 'http://localhost:8089/api'
});