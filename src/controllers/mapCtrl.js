export default function mapCtrl(getRoutes) {
    var vm = this;
    vm.locations = [ //default example data
        [47.01855, -63.99116],
        [34.5662622, -94.7071599],
        [43.2540347, -70.6441649],
        [29.6873267, -89.9627919],
        [49.17711, -101.84405]
    ];

    getRoutes.migration(2001, 550, function(res) {
        console.log(res.data);
        vm.locations = res.data;
    });
}