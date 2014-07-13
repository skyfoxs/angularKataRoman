describe("MainController", function(){
    "use strict";
    var $scope, service;

    beforeEach(function(){
        module("myApp");
        inject(createController);
    });

    function createController($rootScope, $controller){
        var configs;

        $scope = $rootScope.$new();
        service = {
            parseRomanFrom: function(){},
        };

        configs = {
            $scope: $scope,
            RomanService: service,
        };

        $controller("MainController", configs);
    }

    it("should initial romanNumber with empty string", function(){
        expect($scope.romanNumber).toEqual("");
    });

    it("should call RomanService.parseRomanFrom when getRomanNumber called with ng-chnage", function(){
        var mockRomanNumber = "I";
        spyOn(service, "parseRomanFrom").andReturn(mockRomanNumber);
        $scope.arabicNumber = 1;

        $scope.getRomanNumber();

        expect(service.parseRomanFrom).toHaveBeenCalledWith($scope.arabicNumber);
        expect($scope.romanNumber).toEqual(mockRomanNumber);
    });
});