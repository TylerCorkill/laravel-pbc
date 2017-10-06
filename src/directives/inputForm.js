export default function map() {
    return {
        scope: {
            changePoints: '<'
        },
        restrict: 'E',
        controller: 'formCtrl',
        controllerAs: 'ctrl',
        bindToController: true,
        template: require('../templates/inputForm.html')
    }
}