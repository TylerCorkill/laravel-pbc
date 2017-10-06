import angular from 'angular';
import ngMap from 'ngmap';
import inputForm from './directives/inputForm.js';
import mapCtrl from './controllers/mapCtrl.js';
import getRoutes from './services/getRoutes.js';

angular.module('app', ['ngMap'])
    .config(function(){

    })
    .service('getRoutes', getRoutes)
    .controller('mapCtrl', mapCtrl)
    .directive('inputForm', inputForm)
    .run(function ($rootScope, getRoutes) {
        $rootScope.getRoutes = getRoutes;
    });



// run.$inject = ['$rootScope', 'getRoutes'];

// function run($rootScope, getRoutes) {
//
//
// }