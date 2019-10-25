var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.date = Date.now();
    $scope.mLicense = ["6041HR","0740HU","1915HU",
    "0739HU","4293JA","3875HP","7115JF","8730JE",
    "7105JD","3879HP","0736HU","7340JD",
    "6780HS","6781HS","6782HS","6778HS",
    "6119HX","0738HU","6402HS","8763JE",
     "6331JA","7012JA","3880HZ","4213JG","6080JA","0829JB","6626HS",
     "7886HQ","0737HU","6403HS","3876HP","7716JF","0742HU", "0793JE","1765JH"];

	$scope.gasLevel = ["Empty","Quarter","Half","Three Quarter","Full"];

    $scope.days = 0;
    $scope.bFee = 0;
    $scope.oTotal = 0;
    $scope.staff = "no"
    $scope.type = "1";
    $scope.vehicle = "Select"
    $scope.vNumber = 0;
  
    $scope.pCheck = function(){
        if($scope.staff != "no"){
          $scope.oTotal = ($scope.bFee*0.5) * $scope.days;
        }else{
            $scope.oTotal = $scope.bFee * $scope.days;
        }
    }


    $scope.mLinc = function(){
    	if($scope.license == "6041HR"){
            $scope.vehicle = "Mazda Demio";
            $scope.type = "Basic";
            $scope.bFee = 5500;
    		$scope.year = "2012";
			$scope.color = "White";

    	}else if($scope.license == "2560HN"){
            $scope.vehicle = "Nissan Tiida";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2011";
            $scope.yolor = "Silver";
        }else if($scope.license == "3875HP"){
            $scope.vehicle = "Nissan Wingroad";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2012";
            $scope.color = "Silver";
        }else if($scope.license == "7886HQ"){
            $scope.vehicle = "Mazda Premacy";
            $scope.type = "Family Size";
            $scope.bFee = 7500;
            $scope.year = "2012";
            $scope.color = "Black";
        }else if($scope.license == "6626HS"){
            $scope.vehicle = "Nissan Lafesta";
            $scope.type = "Family Size";
            $scope.bFee = 7500;
            $scope.year = "2012";
            $scope.color = "Black";
        }else if($scope.license == "6781HS"){
            $scope.vehicle = "Suzuki Swift";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2015";
            $scope.color = "Grey";
        }else if($scope.license == "6782HS"){
            $scope.vehicle = "Suzuki Swift";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2015";
            $scope.color = "Blue";
        }else if($scope.license == "6780HS"){
            $scope.vehicle = "Suzuki Swift";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2015";
            $scope.color = "Blue";
        }else if($scope.license == "6778HS"){
            $scope.vehicle = "Suzuki Swift";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2015";
            $scope.color = "Silver";
        }else if($scope.license == "0737HU"){
            $scope.vehicle = "Mazda Premacy";
            $scope.type = "Family Size";
            $scope.bFee = 7500;
            $scope.year = "2015";
            $scope.color = "Brown";
        }else if($scope.license == "0740HU"){
            $scope.vehicle = "Nissan Note";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2015";
            $scope.color = "Black";
        }else if($scope.license == "1915HU"){
            $scope.vehicle = "Nissan Note";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2015";
            $scope.color = "Red";
        }else if($scope.license == "0739HU"){
            $scope.vehicle = "Nissan Note";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2013";
            $scope.color = "Red";
        }else if($scope.license == "0736HU"){
            $scope.vehicle = "Nissan Latio";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2013";
            $scope.color = "White";
        }else if($scope.license == "6080JA"){
            $scope.vehicle = "Honda HRV";
            $scope.type = "Compact SUV";
            $scope.bFee = 10500;
            $scope.year = "2016";
            $scope.color = "Blue";
        }else if($scope.license == "6331JA"){
            $scope.vehicle = "Toyota Axio";
            $scope.type = "Premium";
            $scope.bFee = 6500;
            $scope.year = "2015";
            $scope.color = "Grey";
        }else if($scope.license == "7012JA"){
            $scope.vehicle = "Toyota Axio";
            $scope.type = "Premium";
            $scope.bFee = 6500;
            $scope.year = "2015";
            $scope.color = "Silver";
        }else if($scope.license == "0829JB"){
            $scope.vehicle = "Honda CR-V";
            $scope.type = "Mid SUV";
            $scope.bFee = 12500;
            $scope.year = "2013";
            $scope.color = "Black";
        }else if($scope.license == "0738HU"){
            $scope.vehicle = "Nissan Bluebird Sylphy";
            $scope.type = "Premium";
            $scope.bFee = 6500;
            $scope.year = "2014";
            $scope.color = "Black";
        }else if($scope.license == "6403HS"){
            $scope.vehicle = "Toyota Crown";
            $scope.type = "Luxury Entry Level";
            $scope.bFee = 12500;
            $scope.year = "2013";
            $scope.color = "Black";
        }else if($scope.license == "4293JA"){
            $scope.vehicle = "Nissan Note";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2012";
            $scope.color = "Grey";
        }else if($scope.license == "6119HX"){
            $scope.vehicle = "Honda Fit";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2012";
            $scope.color = "Black";
        }else if($scope.license == "3876HP"){
            $scope.vehicle = "Toyoya Mark X";
            $scope.type = "Luxury Entry Level";
            $scope.bFee = 12500;
            $scope.year = "2013";
            $scope.color = "Grey";
        }else if($scope.license == "6402HS"){
            $scope.vehicle = "Nissan Bluebird Sylphy";
            $scope.type = "Premium";
            $scope.bFee = 6500;
            $scope.year = "2016";
            $scope.color = "Black";
        }else if($scope.license == "0742HU"){
            $scope.vehicle = "Honda Step Wagon";
            $scope.type = "8 Seater";
            $scope.bFee = 8500;
            $scope.year = "2013";
            $scope.color = "Black";
        }else if($scope.license == "7716JF"){
            $scope.vehicle = "BMW 428i";
            $scope.type = "Luxury Mid Level";
            $scope.bFee = 26000;
            $scope.year = "2016";
            $scope.color = "Black";
        }else if($scope.license == "3879HP"){
            $scope.vehicle = "Nissan Latio";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2015";
            $scope.color = "Grey";
        }else if($scope.license == "7105JD"){
            $scope.vehicle = "Nissan Latio";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2014";
            $scope.color = "Grey";
        }else if($scope.license == "3880HZ"){
            $scope.vehicle = "Toyota Axio";
            $scope.type = "Premium";
            $scope.bFee = 6500;
            $scope.year = "2013";
            $scope.color = "Grey";
        }else if($scope.license == "0793JE"){
            $scope.vehicle = "Subaru Impreza";
            $scope.type = "Special";
            $scope.bFee = 7500;
            $scope.year = "2014";
            $scope.color = "Grey";
        }else if($scope.license == "7115JF"){
            $scope.vehicle = "Nissan Wingroad";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2014";
            $scope.color = "Grey";
        }else if($scope.license == "8763JE"){
            $scope.vehicle = "Nissan Bluebird Sylphy";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2014";
            $scope.color = "White";
        }else if($scope.license == "8730JE"){
            $scope.vehicle = "Nissan Wingroad";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2014";
            $scope.color = "White";
        }else if($scope.license == "7340JD"){
            $scope.vehicle = "Nissan Latio";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2014";
            $scope.color = "Grey";
        }else if($scope.license == "4213JG"){
            $scope.vehicle = "Toyota Allion";
            $scope.type = "Superior";
            $scope.bFee = 8500;
            $scope.year = "2014";
            $scope.color = "White";
        }else if($scope.license == "1765JH"){
            $scope.vehicle = "Subaru Impreza";
            $scope.type = "Special";
            $scope.bFee = 7500;
            $scope.year = "2014";
            $scope.color = "Black";
        }

    };

  
  

});