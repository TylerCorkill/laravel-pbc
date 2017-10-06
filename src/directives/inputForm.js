export default function map() {
    return {
        restrict: 'E',
        controller: 'mapCtrl',
        controllerAs: 'ctrl',
        bindToController: true,
        template: require('../templates/inputForm.html')
    }
}