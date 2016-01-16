/* global describe */
(function () {
    describe('omdb service', function () {
        var movieData = {
            "Title": "Hungama",
            "Response": "True"
        }
        var $httpBackend;
        var omdbApi = {};
        beforeEach(function () {
            module('omdb');
            inject(function (_omdbApi_, _$httpBackend_) {
                omdbApi = _omdbApi_;
                $httpBackend = _$httpBackend_;
            });

        });
        it('should return search movie data', function () {
            var response;
            $httpBackend.when('GET', 'http://www.omdbapi.com/?v=1&s=star%20wars').respond(200, movieData);
            omdbApi.search('star wars').then(function (data) {
                response = data;
            });
            $httpBackend.flush();
            expect(response).toEqual(movieData)
        });
        it('should return get by id a movie', function () {
            $httpBackend.when('GET', 'http://www.omdbapi.com/?v=1&s=123').respond(200, movieData);
            omdbApi.search('123').then(function (data) {
                response = data;
            });
            $httpBackend.flush();
            expect(response).toEqual(movieData);
        });
    });

}());
