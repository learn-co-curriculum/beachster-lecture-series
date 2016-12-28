(function() {
    'use strict'

    angular
        .module('beachster')
        .controller('BeachDetailController', ['$stateParams', 'BeachFactory', '$state' function($stateParams, BeachFactory, $state) {

            var vm = this
            vm.deleteBeach = deleteBeach

            BeachFactory.getBeach($stateParams.beachId)
                        .then(setBeach)

            function setBeach(data) {
                vm.beach = data
            }

            function deleteBeach(beachId) {
                return BeachFactory.deleteBeach(beachId)
                                   .then(doSomething)

                function doSomething(message) {
                    alert(message)
                    $state.go('beaches')
                }
            }


        }])

}())
