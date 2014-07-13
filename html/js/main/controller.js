var params = [
    "$scope",
    MainController
];
angular.module("myApp").controller("MainController", params);

function MainController($scope){
    $scope.romanNumber = "";

    $scope.getRomanNumber = function(){
        $scope.findRoman($scope.arabicNumber);
    };


    $scope.arabicNumber  = 1;

    var romanMask = ["I","V","X","L","C","D","M"];

    $scope.findRoman = function (arabic){
        var stringArrayOfNumber = splitNumberToStringArray(arabic);

        $scope.romanNumber = "";
        
        for (var i=stringArrayOfNumber.length-1, j=0;i >= 0;i--,j++){
            $scope.romanNumber=findRomanDigit(stringArrayOfNumber[i],romanMask.slice(j*2, (j*2)+3))+$scope.romanNumber;
        }
    }

    $scope.testFindRoman = $scope.findRoman($scope.arabicNumber);

    function splitNumberToStringArray(number){
        var stringNumber = number.toString();
        return stringNumber.split('');
    }

    function findRomanDigit(Stringnumber,romanSign){
        var number = parseInt(Stringnumber);
        var roman = "";
        switch(number){
            case 4:
                roman = romanSign[0]+romanSign[1];
                break;
            case 9:
                roman = romanSign[0]+romanSign[2];
                break;
            case 5:
                roman = romanSign[1];
                break;
            default:
                if (number > 5){
                    roman = romanSign[1];
                    number = number % 5;
                }
                for (var i=0;i<number;i++){
                    roman += romanSign[0];
                }
                break;
        }
        return roman;
    }
}