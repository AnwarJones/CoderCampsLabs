namespace MultiPageApp {
    angular.module('MultiPageApp', ['ngRoute']).config(
        (
            $routeProvider: ng.route.IRouteProvider,
            $locationProvider: ng.ILocationProvider
        ) => {
            $routeProvider
                .when('/', {
                    templateUrl: '/ngApps/MultiPage/page1.html',
                    controller: 'Page1Controller as vm'
                })
                .when('/page1', {
                    templateUrl: '/ngApps/Multipage/page1.html',
                    controller: 'Page1Controller as vm'
                })
                .when('/page2', {
                    templateUrl: '/ngApps/Multipage/page2.html',
                    controller: 'Page2Controller as vm'
                })
                .otherwise('/');
            $locationProvider.html5Mode(true);

        });




}