var params = [
    "$scope",
    "RomanService",
    MainController
];
angular.module("myApp").controller("MainController", params);

function MainController($scope, RomanService){
    "use strict";
    $scope.romanNumber = "";

    $scope.getRomanNumber = function(){
        $scope.romanNumber = RomanService.parseRomanFrom($scope.arabicNumber);
    };
}