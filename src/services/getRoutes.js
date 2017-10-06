export default function getRoutes($http) {
    this.test = function(callback) {
        $http({
            method: 'GET',
            url: `/api/route`
        }).then((res) => {
            callback(res);
        })
    };
    this.migration = function(year, aou) {
        return $http({
            method: 'GET',
            url: `/api/migration/${year}/${aou}`
        });
    }
}