'use strict';
angular.module('stockApp', ['ngRoute', 'accountModule', 'dashboardModule' , 'stockModule']);
 
angular.module('accountModule',['auth0']);
angular.module('dashboardModule',[]);
angular.module('stockModule',[]);
