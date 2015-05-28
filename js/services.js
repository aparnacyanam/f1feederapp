/**
 * Created by Aparna on 5/19/2015.
 */
angular.module('F1FeederApp.services',
    []).factory('ergastAPIService',function($http){

    var ergastAPI={};

    ergastAPI.getDrivers=function(){
        return $http({
            method:'JSONP',
            url:'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
        })
    }

    ergastAPI.getDriverDetails=function(id){
        console.log("Clicked Id is:"+id);
        return $http({
            method:'JSONP',
            url:'http://ergast.com/api/f1/2013/drivers/'+id+'/driverStandings.json?callback=JSON_CALLBACK'
        });
    }

     ergastAPI.getRaceDetails=function(id){
            return $http({
                method: 'JSONP',
                url:'http://ergast.com/api/f1/2013/drivers/'+id+'/results.json?callback=JSON_CALLBACK'
            });
        }

  return ergastAPI;

});