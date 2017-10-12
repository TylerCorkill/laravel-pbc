export default function getData($http) {
    this.bbs = function(year, aou) {
        return $http({
            method: 'GET',
            url: `/api/bbs/${year}/${aou}`
        });
    };

    this.aou = function(name) {
        name = name.split(' ').join('_');
        console.log(`/api/name/${name}`);
        return $http({
            method: 'GET',
            url: `/api/name/${name}`
        });
    };
}