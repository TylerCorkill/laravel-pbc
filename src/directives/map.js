export default function map() {
    return {
        scope: {
            locations: '<'
        },
        restrict: 'E',
        controller: 'mapCtrl',
        controllerAs: 'ctrl',
        bindToController: true,
        template: require('../templates/map.html')
    }
}