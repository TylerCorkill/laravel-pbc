export default function mainCtrl(getData, NgMap) {
    var vm = this;
    vm.locations = [];

    NgMap.getMap().then(function(map) {
        vm.map = map;
        console.log(map);
    });

    vm.changePoints = function(year, species) {
        if (year <= 2009 && year >= 2001) {
            vm.map.data.forEach(function(feature) {
                vm.map.data.remove(feature);
            });


            if (Number.isInteger(+year)) {
                vm.map.data.loadGeoJson('/geojson/' + year + '.json');
            }


            if (Number.isInteger(+species)) {
                getData.bbs(year, species).then(function(res) {
                    vm.locations = res.data;
                });
            } else {
                getData.aou(species).then(function(res) {
                    if (res.data.length) {
                        getData.bbs(year, res.data[0].AOU).then(function(res) {
                            vm.locations = res.data;
                        });
                    }
                });
            }

        } else {
            console.error('YEAR OUT OF RANGE (should be 2001-2009');
        }
    };

}