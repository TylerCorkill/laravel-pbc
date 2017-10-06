export default function main() {
    return {
        restrict: 'E',
        controller: 'mainCtrl',
        controllerAs: 'ctrl',
        bindToController: true,
        template: require('../templates/main.html')
    }
}