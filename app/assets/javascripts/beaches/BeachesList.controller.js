(function() {
    'use strict'

    angular
        .module('beachster')
        .controller('BeachesListController', ['$stateParams', 'BeachFactory', function($stateParams, BeachFactory) {

            var vm = this

            vm.beaches = []

            vm.replaceSpaces = replaceSpaces

            BeachFactory.getBeaches()
                        .then(setBeaches)

            function setBeaches(data) {
                vm.beaches = data
            }

            function replaceSpaces(string) {
                return string.replace(/\s/g, '-')
            }


        }])

}())
