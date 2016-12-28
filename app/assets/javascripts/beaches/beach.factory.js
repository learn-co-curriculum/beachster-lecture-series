(function() {
    'use strict'

    angular
        .module('beachster')
        .factory('BeachFactory', ['$http', function($http) {

            return {
                getBeaches: getBeaches,
                getBeach: getBeach,
                deleteBeach: deleteBeach
            }

            function getBeaches() {
                return $http.get('/api/beaches')
                            .then(handleResponse)
            }

            function getBeach(id) {
                return $http.get('/api/beaches/' + id)
                            .then(handleResponse)
            }

            function deleteBeach(id) {
                var req = {
                    method: 'DELETE',
                    url: '/api/beaches/' + id,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                return $http(req)
                            .then(handleDelete)

                function handleDelete(response) {
                    return response.data.message
                }
            }

            function handleResponse(response) {
                return response.data
            }

        }])

}())
