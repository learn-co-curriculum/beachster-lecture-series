(function() {
    'use strict'

    angular
        .module('beachster')
        .controller('BeachesController', ['$stateParams', function($stateParams) {

            var vm = this

            vm.beaches = [
                {
                    "id": 1,
                    "title": "Jupiter Beach Park",
                    "city": "Jupiter",
                    "state": "Florida",
                    "latitude": 26.938903,
                    "longitude": -80.070053,
                    "rating": 4,
                    "photo_url": "http://captainkimo.com/wp-content/uploads/2014/08/Florida-Beach-Sunrise-Beach-Park-Jupiter-Island.jpg"
                },
                {
                    "id": 3,
                    "title": "Boca Inlet Park",
                    "city": "Boca Raton",
                    "state": "Florida",
                    "latitude": 26.334171,
                    "longitude": -80.072709,
                    "rating": 3,
                    "photo_url": "http://captainkimo.com/wp-content/uploads/2014/07/South-Inlet-Park-Boca-Raton-Florida-Beach-Sunrise.jpg"
                },
                {
                    "id": 4,
                    "title": "Kailua Beach Park",
                    "city": "Kailua",
                    "state": "Hawaii",
                    "latitude": 21.397597,
                    "longitude": -157.727128,
                    "rating": 5,
                    "photo_url": "http://cdn.c.photoshelter.com/img-get2/I0000Ndvr8JAvpsY/fit=1000x750/Canoe-Race-Kailua-Beach-Oahu-Hawaii-SPK-409-MarkAJohnson.jpg"
                }
            ]

            vm.replaceSpaces = replaceSpaces

            function replaceSpaces(string) {
                return string.replace(/\s/g, '-')
            }
        }])

}())
