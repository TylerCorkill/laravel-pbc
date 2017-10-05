import angular from 'angular';
import inputForm from './directives/inputForm.js';
import mapCtrl from './controllers/mapCtrl.js';
import ngMap from 'ngmap';

angular.module('app', ['ngMap'])
    .config(function(){

    })
    .directive('inputForm', inputForm)
    .controller('mapCtrl', mapCtrl);