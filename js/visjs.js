/***
Name: Akeim Sutherland
Project: Kaizen Rental Form
Version: 1.0
Latest Update Date: 11/5/2019

**/


var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    //variable initialization and declaration
    var num =0;
    var bearer = "Bearer SHK3nWYxSDCZXQtFBdjxHTfgm3qUGhPwK3mbaI2sICh4Jp33efPmUNlECIkLaF94rbdIUepjdCB8MBvLgNtw2K4t7EyV2Kvmub0GAaM6s3DDPrtMuU8gO-Mh1aZ27NcjCRdXq53ASK4bbRr40YmDjzy2TpnpIAXrKvfg4oTHJFantEKOuniS9zXo2im5auQzL7Ul0LYFGIZ_OdZixSXUT-QrNpojzl40H25QqldZolVr0q2zutgtsHvhcev2rtkulIhDpRQrKlL5_NCCXXi_3u29-USUQXuTLGeAk0NwVDce7JOPtYjMzf_Nz2_ffNtlC6ZTQvNBtE6HRfaCgPolZ0mZmXV-Xh0BT5rN26pwCxw5UANYM5_PUSpU3-g0Lr-bRjlxsljgYwrEIHEoU2njDUv9qitAOkJDV4qTeg3Yo791XrA5rSurZx8fC7NhdxoUfP4lQXbvyEOZ5ZtLm3Fj3HLozXztVdI_xD6Yi40j3M0QGf3mAMIyrI3JXCKMmFI5_Smr-GMagSSobYi3AI6J53Lahj5hMa1FERnwmR7hJwtThcCyH0LTFwcXogzzMh7bTQNPRoDVoQelxKNXia_6vCBIzC9PwU5SVyTA4PdknQUm_iPaxqT7Baux2uMWTqVqm6bCtKoMXHp0JwXBwG4xsOJBYEV5r-MQrJQ_LGTdkOn78cr4fRZkH0C-UfYQP4udMmX7P7O02292O7uDlu8vxSS4KOmegEiLIGfK-e4jxgkkaavysdSektUpUPkU3YMpm8l-8oVgg6xEBaVO_3FWNlb7JMN04V6-Yg9IgTXFmwKQxccCFdZv0flXf0qh7bWrLOfxtfls--LCKfNCKSC2XVtNTiewcUZYE0usLAoYUcWSvrv-GLu_sFxzg1nmJoibvWRefDF98cj_Kx7Fcr8B-nBoxJXVIetO4eIjMXUBrPR20uWQUyPmfmy7QA6JGr1I7T_l4Wp2yg_lUV6S75fdzXMibCRG66-hleLBH8xSnwYjr0ZiT_X_kC3Z-bUOhM7TRtDwp8MnZw6-veLI7zWkrRI2MBcYW48uXJWdZsn0Tfg0JkDLIwA0M50zQyhvSgcK_dGuhyKquaeE7VkTmFSQbMOl7Q7PVVRo3g7_hmiovd6jCT-dnYlnBtjBbC0HWU8ODwNpWaXBxAv7Yu503IvatLQCh-x2IrsGMd1FpacC9a774brNQA84qHLBuU_TZPK9SZXIgP1GGgKsBN5rN4AMUO5FL6SWUwLlAQVTougJoXaX4EraCwiQkFG3HDryzCpRZX9fa24OciOnk4lPw5Yi7yMXq4pxtEfqSKSChY5i4dPiU1w7KvWl5zBsKhf88HANcfdh29sz8ipDY0_D3G2k03i40OdERX_CeapqGKOktOtYi1rvGHIRRw6JjkZIG7J0_C2z8dESgX841GRj7DoqZRAgWmteT8xbsouEorzrkeQPJgeyEmf3_0WyJGBJb0JC_X-YIfqvkSKuS-Vie04wbwhBQvm1pFagppYwTZs0CLZpisPUrRyDTN00QkZxc61UySb_3QxnMpTEH3LxaZCi0T_W4cCZKGln1ZBRyTteaTV3HkFZist-Z5Zajr0yyAHaaBbc_j0EASvH6OMuT-NjmuK-WxcXqIeeIHhQCPpwc-zC8ljn4ZyJvv-1ne780ORvaShzj7Y9yf9Eq6tl2h0o6OYVoH13bRvX8X8kuZjqrPcMlUFp6_QE_NRhnceq9KohdOolDcWA3z9YhlhE6WxcIH4T3LGv-7aABPtYL4kM8Jr-Fo9BMWyaPGVwe1hTC8PI13L7ih85PNeVYTEmBDQxh_sQK1CNSIsfUZ57aRSjUBdManEPMK00mqDRjmQiR8dClF40ImOBPL5o1VOhApj5Rlhe8klNtBxXaeEAXC9sNiyDnPcd87CjZczArIrkaC_om6EwxzHTSLCB8_j-tmVctoROu35vmXI5h_kvx45e5a6-WPLl9D2Q8jGH3qIVOBDCVUyN_7Ql2CALlsdcyI9xsyYs8nCYlJfm2sJnf-V5HqA9RuoujHcZshPt1wKM9b8gV-22ceP3XcEzsNxXghUg74Q3CZ_Z9JCnjsGR3ZPH-_0"
    $scope.adNameA=[];
    $scope.adEmailA=[];
    $scope.date = Date.now();
     $scope.customerID ="";
     $scope.addl ="binded text";
     //an array of the waiver options available when renting a vehicle
     $scope.waiverSchedule = ["☐ JMD $500.00 per day for damages up to but not exceeding JMD $25,000.00", 
     "☐ JMD $1,000.00 per day for damages up to but not exceeding JMD $100,000.00",
     "☐ JMD $2,000.00 per day for damages up to but not exceeding JMD $250,000.00"];



    $scope.checkAgreement = function(){
        var settings = {
  "url": "https://app.navotar.com/api/Agreement/GetAgreement?agreementId="+$scope.agreementID,
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": bearer
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
  $scope.agreement = response;
  //$scope.agentName = $scope.agreement.agreementDetail.createdByName;
  $scope.name = $scope.agreement.agreementDetail.firstName+" "+$scope.agreement.agreementDetail.lastName;
  $scope.email = $scope.agreement.agreementDetail.email;
  $scope.contact = $scope.agreement.agreementDetail.hPhone;
  $scope.dLicence = $scope.agreement.agreementDetail.customerLicenseNumber;
  $scope.country = $scope.agreement.agreementDetail.countryName;
  $scope.address = $scope.agreement.agreementDetail.address1;
  $scope.type = $scope.agreement.agreementDetail.vehicleType;
  $scope.vehicle = $scope.agreement.agreementDetail.vehicleMakeName+"  "+$scope.agreement.agreementDetail.modelName;
  $scope.year = $scope.agreement.agreementDetail.year;
  $scope.license = $scope.agreement.agreementDetail.licenseNo;

  $scope.days = $scope.agreement.agreementDetail.totalDays;
  $scope.startDate = $scope.agreement.agreementDetail.checkoutDate;
  $scope.returnDate = $scope.agreement.agreementDetail.checkinDate;
  
  $scope.expiredYear = $scope.agreement.agreementDetail.licenseExpiryDate;

  $scope.bFee = $scope.agreement.agreementDetail.dailyRate;
  $scope.oTotal = $scope.agreement.agreementDetail.totalAmount;
  $scope.pTotal = $scope.agreement.agreementDetail.amountPaid;
  $scope.oDeposit = $scope.agreement.agreementDetail.deposit;
  $scope.mileage = $scope.agreement.agreementDetail.currentOdometer

  $scope.customerID = $scope.agreement.agreementDetail.customerId;
  $scope.checkCustomer($scope.customerID);
 
});
    
    }

$scope.checkCustomer = function(id){
        var settings = {
  "url": "https://app.navotar.com/api/Customer/GetCustomer?customerId="+id,
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": bearer
      },
    };

    $.ajax(settings).done(function (response) {
    $scope.dob = response.dateOfbirth;
    });
 }



    $scope.add = function(){
        num++;
        $scope.adNameA.push( "Additional Driver"+num+": "+$scope.adname+" \nEmail: "+$scope.ademail+" \nAddress: "+$scope.adaddress+
            "  Driver's License #: "+$scope.addLicence+" Country of Issue: "+$scope.adcountry+" Original issue year: "+$scope.adissuedYear.getFullYear()
            +" Expired Year: "+$scope.adexpiredYear.getFullYear()+" Date of birth: "+$scope.addob.getMonth()+"/"
            +$scope.addob.getDate()+"/"+$scope.addob.getFullYear()+" Contact: "+$scope.adcontact);

        num++;
    }

  
   

  
  

});