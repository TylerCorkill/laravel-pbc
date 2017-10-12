export default function mapCtrl(NgMap) {
    var vm = this;
    // vm.locations = [];
    // vm.year = 2001;
    // vm.show = false;

    // this.changePoints = function(year, species) {
    //     vm.year = year;
    //     vm.show = true;
    //     console.log('asdf');
    //     getRoutes.migration(year, species).then(function(res) {
    //         vm.locations = res.data;
    //         console.log(vm);
    //     });
    // };
    // console.log(NgMap);
    //
    // NgMap.getMap().then(function(map) {
    //     vm.map = map;
    //     console.log(map);
    // });
    this.styleFunc = function(feature) {
        // var color = 'pink';
        // console.log(feature);
        // if (feature.getProperty('isColorful')) {
        //     color = feature.getProperty('color');
        // }
        // return /** @type {google.maps.Data.StyleOptions} */({
        //     fillColor: color,
        //     strokeColor: color,
        //     strokeWeight: 2
        // });
        return {
            fillColor: 'brown',
            strokeWeight: 0,
            fillOpacity: 0.01
        };
    };

    //
    // vm.onClick= function(event) {
    //     event.feature.setProperty('isColorful', true);
    // };
    //
    // vm.onMouseover = function(event) {
    //     vm.map.data.revertStyle();
    //     vm.map.data.overrideStyle(event.feature, {strokeWeight: 8});
    // };
    //
    // vm.onMouseout = function(event) {
    //     vm.map.data.revertStyle();
    // };

    // getRoutes.migration(2001, 530).then(function(res) {
    //     // for (var location of res.data) {
    //     //     vm.locations.push(location);
    //     // }
    //     vm.locations = res.data;
    //     // vm.locations.push(...res.data);
    //     console.log(vm);
    // });


}