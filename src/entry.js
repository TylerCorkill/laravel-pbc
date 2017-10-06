import angular from 'angular';
import ngMap from 'ngmap';
import mainDir from './directives/main.js';
import mainCtrl from './controllers/main.js';
import mapDir from './directives/map.js';
import mapCtrl from './controllers/mapCtrl.js';
import formDir from './directives/inputForm.js';
import formCtrl from './directives/inputForm.js';
import getRoutes from './services/getRoutes.js';

angular.module('app', ['ngMap'])
    .config(function() {

    })
    .service('getRoutes', getRoutes)

    .directive('mainBody', mainDir).controller('mainCtrl', mainCtrl)

    .directive('mapDir', mapDir).controller('mapCtrl', mapCtrl)

    .directive('inputForm', formDir).controller('formCtrl', formCtrl)

    .run(function ($rootScope, getRoutes) {
        $rootScope.getRoutes = getRoutes;
    });



// run.$inject = ['$rootScope', 'getRoutes'];

// function run($rootScope, getRoutes) {
//
//
// }