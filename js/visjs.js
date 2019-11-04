/***
Name: Akeim Sutherland
Project: Kaizen Rental Form
Version: 1.0
Latest Update Date: 10/30/2019

**/
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    //variable initialization and declaration
    var num =1;
    $scope.adNameA=[];
    $scope.adEmailA=[];
    $scope.date = Date.now();
    //an array of the license plates and the chassis number
    $scope.mLicense = ["1765JH|GP2020521","6041HR|DE3FS533673","2560HN|SC11309649",
    "3875HP|Y12140655","7886HQ|CWEFW145124","6626HSCWEFWN115188","6781HS|ZC72S357606","6782HS|ZC72S358148",
    "6780HS|ZC72S359285","6778HS|ZC72S357718","0737HU|CWFFW129341","0740HU|E123303386",
    "0739HU|E12099052","0736HU|N17004823","6080JA|3CZRU6H55GM728512","6331JA|NRE1607011824",
    "7012JA|NRE1607012508","0829JB|RM11103729","0738HU|TB17018746","6403HS|GRS2106007470",
     "4293JA|E1162774","6119HX|GE61709554","3876HP|GRX1306068229","6402HS|TB17026941",
     "0742HU|RK11319874","7716JF|N26B20AA5991253","3879HP|N17702037",
     "7105JD|N17011223","3880HZ|NRE1607005245","0793JE|GJ2006757","7115JF|Y12167893",
     "8763JE|TB17016992","8730JE|Y12168082", "7340JD|N17009162","4213JG|ZRT2613022809","1765JH|GP2020521"];

     $scope.addl ="binded text";
     //an array of the waiver options available when renting a vehicle
     $scope.waiverSchedule = ["☐ JMD $500.00 per day for damages up to but not exceeding JMD $25,000.00", 
     "☐ JMD $1,000.00 per day for damages up to but not exceeding JMD $100,000.00",
     "☐ JMD $2,000.00 per day for damages up to but not exceeding JMD $250,000.00"];
     //and array for the gas level
	$scope.gasLevel = ["Empty","Quarter","Half","Three Quarter","Full"];
    //an array for the rental times
    $scope.rentTime = ["7:00AM","8:00AM","9:00AM","10:00AM","11:00AM","12:00PM",
    "1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM"];

    //trying to figure out how to do the additional drivers without a database, by using an array. Gonna need to do some research
    
    $scope.add = function(){
        
        $scope.adNameA.push( "Additional Driver"+num+": "+$scope.adname+" \nEmail: "+$scope.ademail+" \nAddress: "+$scope.adaddress+
            "  Driver's License #: "+$scope.addLicence+" Country of Issue: "+$scope.adcountry+" Original issue year: "+$scope.adissuedYear.getFullYear()
            +" Expired Year: "+$scope.adexpiredYear.getFullYear()+" Date of birth: "+$scope.addob.getMonth()+"/"
            +$scope.addob.getDate()+"/"+$scope.addob.getFullYear()+" Contact: "+$scope.adcontact);


        
       //$scope.adEmailA.push("Email: "+$scope.ademail);
      /*  $scope.adAddressA.push("Address: "+$scope.adaddress);
        $scope.addLicenseA.push("Email: "+$scope.addLicense);
        $scope.adCountryA.push("Email: "+$scope.adcountry);
        $scope.adContactA.push("Email: "+$scope.adcontact);
        $scope.adDobA.push("Email: "+$scope.addob);*/
  /*  $scope.additionalDriver = "Additional Driver 1: "+$scope.adname+
        " Email: "+$scope.ademail+
        "Driver’s Licence #: "+$scope.addLicense+"  Country of Issue: "+ $scope.adcountry+
        "Original issue year: "+$scope.adissuedYear+" Expiry date: "+$scope.adexpiredYear+
        "Date of Birth: "+$scope.addob+" Contact Number: "+$scope.adcontact+
        "Address: "+$scope.adaddress;*/
        //$scope.oTotal += 500*$scope.days;
        num++;
    }

    $scope.days = 0;
    $scope.bFee = 0;
    $scope.oTotal = 0;
    $scope.staff = 0
    $scope.type = "1";
    $scope.vehicle = "Select"
    $scope.vNumber = 0;
     //this calcuates the staff discount if the staff checkbox is selected
    $scope.pCheck = function(){
        if($scope.staff != 0){
          $scope.oTotal = ($scope.bFee*0.5) * $scope.days;
        }else{
            $scope.oTotal = $scope.bFee * $scope.days;
        }
    }

    //this fills out the vehicle information based on the license/chassis number selected
    $scope.mLinc = function(){
    	if($scope.license == "6041HR|DE3FS533673"){
            $scope.vehicle = "Mazda Demio";
            $scope.type = "Basic";
            $scope.bFee = 5500;
    		$scope.year = "2012";
			$scope.color = "White";

    	}else if($scope.license == "2560HN|SC11309649"){
            $scope.vehicle = "Nissan Tiida";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2011";
            $scope.color = "Silver";
        }else if($scope.license == "3875HP|Y12140655"){
            $scope.vehicle = "Nissan Wingroad";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2012";
            $scope.color = "Silver";
        }else if($scope.license == "7886HQ|CWEFW145124"){
            $scope.vehicle = "Mazda Premacy";
            $scope.type = "Family Size";
            $scope.bFee = 7500;
            $scope.year = "2012";
            $scope.color = "Black";
        }else if($scope.license == "6626HS|CWEFWN115188"){
            $scope.vehicle = "Nissan Lafesta";
            $scope.type = "Family Size";
            $scope.bFee = 7500;
            $scope.year = "2012";
            $scope.color = "Black";
        }else if($scope.license == "6781HS|ZC72S357606"){
            $scope.vehicle = "Suzuki Swift";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2015";
            $scope.color = "Grey";
        }else if($scope.license == "6782HS|ZC72S358148"){
            $scope.vehicle = "Suzuki Swift";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2015";
            $scope.color = "Blue";
        }else if($scope.license == "6780HS|ZC72S359285"){
            $scope.vehicle = "Suzuki Swift";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2015";
            $scope.color = "Blue";
        }else if($scope.license == "6778HS|ZC72S357718"){
            $scope.vehicle = "Suzuki Swift";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2015";
            $scope.color = "Silver";
        }else if($scope.license == "0737HU|CWFFW129341"){
            $scope.vehicle = "Mazda Premacy";
            $scope.type = "Family Size";
            $scope.bFee = 7500;
            $scope.year = "2015";
            $scope.color = "Brown";
        }else if($scope.license == "0740HU|E123303386"){
            $scope.vehicle = "Nissan Note";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2015";
            $scope.color = "Black";
        }else if($scope.license == "1915HU|E12417063"){
            $scope.vehicle = "Nissan Note";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2015";
            $scope.color = "Red";
        }else if($scope.license == "0739HU|E12099052"){
            $scope.vehicle = "Nissan Note";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2013";
            $scope.color = "Red";
        }else if($scope.license == "0736HU|N17004823"){
            $scope.vehicle = "Nissan Latio";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2013";
            $scope.color = "White";
        }else if($scope.license == "6080JA|3CZRU6H55GM728512"){
            $scope.vehicle = "Honda HRV";
            $scope.type = "Compact SUV";
            $scope.bFee = 10500;
            $scope.year = "2016";
            $scope.color = "Blue";
        }else if($scope.license == "6331JA|NRE1607011824"){
            $scope.vehicle = "Toyota Axio";
            $scope.type = "Premium";
            $scope.bFee = 6500;
            $scope.year = "2015";
            $scope.color = "Grey";
        }else if($scope.license == "7012JA|NRE1607012508"){
            $scope.vehicle = "Toyota Axio";
            $scope.type = "Premium";
            $scope.bFee = 6500;
            $scope.year = "2015";
            $scope.color = "Silver";
        }else if($scope.license == "0829JB|RM11103729"){
            $scope.vehicle = "Honda CR-V";
            $scope.type = "Mid SUV";
            $scope.bFee = 12500;
            $scope.year = "2013";
            $scope.color = "Black";
        }else if($scope.license == "0738HU|TB17018746"){
            $scope.vehicle = "Nissan Bluebird Sylphy";
            $scope.type = "Premium";
            $scope.bFee = 6500;
            $scope.year = "2014";
            $scope.color = "Black";
        }else if($scope.license == "6403HS|GRS2106007470"){
            $scope.vehicle = "Toyota Crown";
            $scope.type = "Luxury Entry Level";
            $scope.bFee = 12500;
            $scope.year = "2013";
            $scope.color = "Black";
        }else if($scope.license == "4293JA|E1162774"){
            $scope.vehicle = "Nissan Note";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2012";
            $scope.color = "Grey";
        }else if($scope.license == "6119HX|GE61709554"){
            $scope.vehicle = "Honda Fit";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2012";
            $scope.color = "Black";
        }else if($scope.license == "3876HP|GRX1306068229"){
            $scope.vehicle = "Toyoya Mark X";
            $scope.type = "Luxury Entry Level";
            $scope.bFee = 12500;
            $scope.year = "2013";
            $scope.color = "Grey";
        }else if($scope.license == "6402HS|TB17026941"){
            $scope.vehicle = "Nissan Bluebird Sylphy";
            $scope.type = "Premium";
            $scope.bFee = 6500;
            $scope.year = "2016";
            $scope.color = "Black";
        }else if($scope.license == "0742HU|RK11319874"){
            $scope.vehicle = "Honda Step Wagon";
            $scope.type = "8 Seater";
            $scope.bFee = 8500;
            $scope.year = "2013";
            $scope.color = "Black";
        }else if($scope.license == "7716JF|N26B20AA5991253"){
            $scope.vehicle = "BMW 428i";
            $scope.type = "Luxury Mid Level";
            $scope.bFee = 26000;
            $scope.year = "2016";
            $scope.color = "Black";
        }else if($scope.license == "3879HP|N17702037"){
            $scope.vehicle = "Nissan Latio";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2015";
            $scope.color = "Grey";
        }else if($scope.license == "7105JD|N17011223"){
            $scope.vehicle = "Nissan Latio";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2014";
            $scope.color = "Grey";
        }else if($scope.license == "3880HZ|NRE1607005245"){
            $scope.vehicle = "Toyota Axio";
            $scope.type = "Premium";
            $scope.bFee = 6500;
            $scope.year = "2013";
            $scope.color = "Grey";
        }else if($scope.license == "0793JE|GJ2006757"){
            $scope.vehicle = "Subaru Impreza";
            $scope.type = "Special";
            $scope.bFee = 7500;
            $scope.year = "2014";
            $scope.color = "Grey";
        }else if($scope.license == "7115JF|Y12167893"){
            $scope.vehicle = "Nissan Wingroad";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2014";
            $scope.color = "Grey";
        }else if($scope.license == "8763JE|TB17016992"){
            $scope.vehicle = "Nissan Bluebird Sylphy";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2014";
            $scope.color = "White";
        }else if($scope.license == "8730JE|Y12168082"){
            $scope.vehicle = "Nissan Wingroad";
            $scope.type = "Basic";
            $scope.bFee = 5500;
            $scope.year = "2014";
            $scope.color = "White";
        }else if($scope.license == "7340JD|N17009162"){
            $scope.vehicle = "Nissan Latio";
            $scope.type = "Standard";
            $scope.bFee = 6000;
            $scope.year = "2014";
            $scope.color = "Grey";
        }else if($scope.license == "4213JG|ZRT2613022809"){
            $scope.vehicle = "Toyota Allion";
            $scope.type = "Superior";
            $scope.bFee = 8500;
            $scope.year = "2014";
            $scope.color = "White";
        }else if($scope.license == "1765JH|GP2020521"){
            $scope.vehicle = "Subaru Impreza";
            $scope.type = "Special";
            $scope.bFee = 7500;
            $scope.year = "2014";
            $scope.color = "Black";
        }

    };

  
  

});