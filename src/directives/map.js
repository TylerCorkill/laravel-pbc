export default function map() {
    return {
        scope: {
            locations: '<',
            year: '<',
            show: '<'
        },
        restrict: 'E',
        controller: 'mapCtrl',
        controllerAs: 'ctrl',
        bindToController: true,
        template: require('../templates/map.html')
    }
}