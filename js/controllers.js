angular.module('F1FeederApp.controllers', []).
    controller('driversController', function($scope,ergastAPIService) {

        console.log("Controller invoked..");
        $scope.nameFilter=null;
        $scope.driversList=[];
        $scope.url="/view/championship.html";

        $scope.searchFilter=function(driver){
            var keyword=new RegExp($scope.nameFilter,'i');
            return !$scope.nameFilter || keyword.test(driver.Driver.givenName) ||  keyword.test(driver.Driver.familyName);
        };

        ergastAPIService.getDrivers().success(function(response){

            $scope.driversList=response.MRData.StandingsTable.StandingsLists[0].DriverStandings;

        });

    });

angular.module('F1FeederApp.controllers').controller('driverController',
    ['$scope', '$routeParams','ergastAPIService',
        function($scope, $routeParams, ergastAPIService) {
        $scope.id = $routeParams.id;
        $scope.races = [];
        $scope.driver = null;

            ergastAPIService.getDriverDetails($scope.id).success(function (response) {
            console.log("In get Driver details service");
            $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
        });

            ergastAPIService.getRaceDetails($scope.id).success(function (response) {
            $scope.races = response.MRData.RaceTable.Races;
        });
    }]);