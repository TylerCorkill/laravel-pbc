export default function map() {
    return {
        scope: {
            changePoints: '<',
            changeJson: '<'
        },
        restrict: 'E',
        controller: 'formCtrl',
        controllerAs: 'ctrl',
        bindToController: true,
        template: require('../templates/inputForm.html')
    }
}