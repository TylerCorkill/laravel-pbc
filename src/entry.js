import angular from 'angular';
import map from './directives/map.js';
// import layoutCtrl from './controllers/map.js';

angular.module('app', [])
    .config(function(){

    })
    .directive('map', map);
    // .controller('appCtrl', layoutCtrl);