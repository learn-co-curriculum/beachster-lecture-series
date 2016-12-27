(function() {
    'use strict'

    angular
        .module('beachster')
        .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $routeProvider) {
            // remove # from url Routes
            $locationProvider.html5Mode(true);

            // State routes
            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        nav: {
                            templateUrl: 'navbar/navbar.html'
                        },
                        content: {
                            templateUrl: 'home/home.html'
                        }
                    }
                })

            // routes invalid routes to root url /
            $urlRouterProvider.otherwise('/')


        }])

}())
