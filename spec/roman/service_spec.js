describe("RomanService", function(){
    "use strict";
    var service;
    beforeEach(function() {
        module("myApp");
        inject(createService);
    });

    function createService(RomanService){
        service = RomanService;
    };

    it("should be I when input is 1", function() {
        expect(service.parseRomanFrom(1)).toBe("I");
    });

    it("should be II when input is 2", function() {
        expect(service.parseRomanFrom(2)).toBe("II");
    });

    it("should be III when input is 3", function() {
        expect(service.parseRomanFrom(3)).toBe("III");
    });

    it("should be IV when input is 4", function() {
        expect(service.parseRomanFrom(4)).toBe("IV");
    });

    it("should be V when input is 5", function() {
        expect(service.parseRomanFrom(5)).toBe("V");
    });

    it("should be VI when input is 6", function() {
        expect(service.parseRomanFrom(6)).toBe("VI");
    });

    it("should be VII when input is 7", function() {
        expect(service.parseRomanFrom(7)).toBe("VII");
    });

    it("should be VIII when input is 8", function() {
        expect(service.parseRomanFrom(8)).toBe("VIII");
    });

    it("should be IX when input is 9", function() {
        expect(service.parseRomanFrom(9)).toBe("IX");
    });

    it("should be X when input is 10", function() {
        expect(service.parseRomanFrom(10)).toBe("X");
    });

    it("should be XI when input is 11", function() {
        expect(service.parseRomanFrom(11)).toBe("XI");
    });

    it("should be XII when input is 12", function() {
        expect(service.parseRomanFrom(12)).toBe("XII");
    });

    it("should be XIII when input is 13", function() {
        expect(service.parseRomanFrom(13)).toBe("XIII");
    });

    it("should be XIV when input is 14", function() {
        expect(service.parseRomanFrom(14)).toBe("XIV");
    });

    it("should be XV when input is 15", function() {
        expect(service.parseRomanFrom(15)).toBe("XV");
    });

    it("should be XVI when input is 16", function() {
        expect(service.parseRomanFrom(16)).toBe("XVI");
    });

    it("should be XVII when input is 17", function() {
        expect(service.parseRomanFrom(17)).toBe("XVII");
    });

    it("should be XVIII when input is 18", function() {
        expect(service.parseRomanFrom(18)).toBe("XVIII");
    });

    it("should be XIV when input is 19", function() {
        expect(service.parseRomanFrom(19)).toBe("XIX");
    });

    it("should be XX when input is 20", function() {
        expect(service.parseRomanFrom(20)).toBe("XX");
    });
});