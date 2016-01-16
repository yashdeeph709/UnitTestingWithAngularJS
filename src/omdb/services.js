angular.module("omdb", []).factory('omdbApi', function ($http, $q) {
    var service = {};
    service.search = function (query) {
        var deffered = $q.defer();
        $http.get("http://www.omdbapi.com/?v=1&s=" + encodeURIComponent(query))
            .success(function (data) {
                deffered.resolve(data);
            });
        return deffered.promise;
    };
    service.getById = function (id) {
        var deffered = $q.defer();
        $http.get("http://www.omdbapi.com/?v=1&s=" + encodeURIComponent(id))
            .success(function (data) {
                deffered.resolve(data);
            });
        return deffered.promise;
    };
    return service;
});
