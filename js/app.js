angular.module('F1FeederApp', [
    'F1FeederApp.controllers',
    'F1FeederApp.services',
    'ngRoute'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/drivers",
        {
            templateUrl: "../view/championship.html",
            controller: "driversController"
        })
        .when("/driver/:id",
        {
            templateUrl: "../view/drivers.html",
            controller: "driverController"

        })
        //.when("/",
        //{
        //    redirectTo: "/drivers"
        //})
        .otherwise({ redirectTo: "/drivers" });
}
]);