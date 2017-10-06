export default function mapCtrl(getRoutes) {
    var vm = this;
    vm.locations = [];

    this.changePoints = function(year, species) {
        getRoutes.migration(year, species).then(function(res) {
            vm.locations = res.data;
            console.log(vm);
        });
    };

    // getRoutes.migration(2001, 530).then(function(res) {
    //     // for (var location of res.data) {
    //     //     vm.locations.push(location);
    //     // }
    //     vm.locations = res.data;
    //     // vm.locations.push(...res.data);
    //     console.log(vm);
    // });


}