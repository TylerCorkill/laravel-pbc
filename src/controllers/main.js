export default function mainCtrl(getRoutes) {
    var vm = this;
    this.locations = [];

    this.changePoints = function(year, species) {
        console.log('test');
        getRoutes.migration(year, species).then(function(res) {
            vm.locations = res.data;
            console.log(this);
        });
    };
}