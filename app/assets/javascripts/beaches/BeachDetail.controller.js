(function() {
    'use strict'

    angular
        .module('beachster')
        .controller('BeachDetailController', ['$stateParams', function($stateParams) {

            var vm = this

            vm.beach = { title: 'Beaches are coming', photo_url: "http://captainkimo.com/wp-content/uploads/2014/08/Florida-Beach-Sunrise-Beach-Park-Jupiter-Island.jpg" }

        }])

}())
