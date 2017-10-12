import angular from 'angular';
import ngMap from 'ngmap';
import mainDir from './directives/main.js';
import mainCtrl from './controllers/main.js';
import mapDir from './directives/map.js';
import mapCtrl from './controllers/mapCtrl.js';
import formDir from './directives/inputForm.js';
import formCtrl from './directives/inputForm.js';
import getData from './services/getData.js';

angular.module('app', ['ngMap'])
    .config(function() {

    })
    .service('getData', getData)

    .directive('mainBody', mainDir).controller('mainCtrl', mainCtrl)

    .directive('mapDir', mapDir).controller('mapCtrl', mapCtrl)

    .directive('inputForm', formDir).controller('formCtrl', formCtrl)

    .run(function ($rootScope, getData) {
        $rootScope.getData = getData;
    });