var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {


	$scope.gasLevel = ["Empty","Quarter","Half","Three Quarter","Full"];
    $scope.names = [
    "Basic", 
    "Standard", 
    "Premium",
    "Family-Sized",
    "Luxury"
    ];
    $scope.days = 0;
    $scope.bFee = 0;
    $scope.oTotal = 0;
    $scope.type = "1";
    $scope.vehicle = "Select"
    $scope.vNumber = 0;

    $scope.pCheck = function(){
           if ($scope.type == "Basic" && $scope.days != 0){
                   $scope.oTotal = 5500 * $scope.days;
           }
    }

    $scope.myFunc = function(){
    	if($scope.type == "Basic"){
            $scope.bFee = 5500;
    		$scope.model = [
    		"Mazda Demio", 
    		"Nissan Note",
    		"Nissan Wingroad"
    		];
    	} else if($scope.type == "Standard"){
            $scope.bFee = 6000;
    		$scope.model = ["Nissan Latio", "Suzuki Swift"];
    	}else if($scope.type == "Premium"){
            $scope.bFee = 10500;
    		$scope.model = [
    			"Honda Fit",
    			"Nissan Bluebird Sylphy",
    			"Toyota Corolla Axio"
    		];
    	}else if($scope.type == "Luxury"){
    		$scope.model = [
    			"Honda CRV",
    			"Honda HRV",
    			"Toyota Crown",
    			"Toyota Mark X"
    		];
    	}
    };

    $scope.mLinc = function(){
    	if($scope.vehicle == "Mazda Demio"){
    		$scope.mLicense = [
    			"6041HR"
    		];
    		$scope.mYear = ["2012","2014"];
			$scope.mColor = ["white","silver"];
    	}else if($scope.vehicle == "Nissan Note"){
    		$scope.mLicense = [
    			"0740HU",
    			"1915HU",
    			"0739HU",
    			"4293JA"
    		];
    		$scope.mYear = ["2011","2012","2013","2014","2015"];
			$scope.mColor = ["black","white","silver"];
    	}else if($scope.vehivle == "Nissan Wingroad"){
    		$scope.mLicense = [
    			"3875HP",
    			"7115JF",
    			"8730JE"
    		];
    		$scope.mYear = ["2013","2014","2015"];
			$scope.mColor = ["white","grey"];
    	}else if($scope.vehicle == "Nissan Latio"){
    		$scope.mLicense = [
    			"7105JD",
    			"3879HP",
    			"0736HU",
    			"7340JD "

    		];
    		$scope.mYear = ["2015"];
			$scope.mColor = ["white","gray"];
    	}else if($scope.vehicle == "Suzuki Swift"){
    		$scope.mLicense = [
    			"6780HS",
    			"6781HS",
    			"6782HS",
    			"6778HS"
    		];
    		$scope.mYear = ["2014","2015"];
			$scope.mColor = ["silver","gray","blue"];
    	}
    };

  
  

});