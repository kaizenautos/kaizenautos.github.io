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
    var bearer = "Bearer _yE7xvc8ohF8PqT8LNKnttDZBllk_SI-uKn4F5GSR9lkGUyQh1gb4qR8Mov0BoAm-y2KLP6aiNGKYLko683DIn33Gms-zn4EJVUb-9K2_TccmkU0Wrt3uUPeGWAjlA9fsuMNELeYoWtT2_46Tw15xNyopEaz2OdYrn19huOZlyrq9JvDOgjvltzY05quMaR0ZgurEl8025mUa_uBTtBhkKTiuNJIZoTsbuINS0sy8KuLHxJ6QaEoQgCbrrd7sekZ3acOFFv39pTqe2t9k4iLjr1xXF2GOyuPAunoEF-TOJJrBfLmmgcsEGdeNTX8hWL1YIMAzpOpsTIi5e8E0aVpm5qTiJJ8yYX3OxBuzYLKKz5arHrr0leaq8io4b9bpsGpE8N-4bw4tHjuEtC-ytFeyxt0_Fuukak0FY6QRVNuco6qrNExU-MtEeGglS97OAuw8leQ8SIKt15qDOq5PznzkWPXo-ZtbX7db7Ztpd-kWCRkghTDQzkpW-zLNArOy3NEnUGcu7b9_tOR40VKdymOXpbsnGbr8KveNxI7O8bp0tVhijsL6DUCG0GHT3o2__Uq3hRK8BuZ5fl-iAdaziXoIdWzgBpaa_EWgLyCBcwnwtpBcSMPc9r2Sp4lU8RbcUyFPQx_v0Yi8Y1VyN8DMGyyTZEIULzLuVj3wKi4bLFSN_3gKxWI_QB5zshY5Kq9BaW6P80PF-5SVP2Tf1tTPPraSVkvjeMFH-yTMEhwlikZTOHzsCrkc1h_QACAqmqxqNrNM4dBm8Fg2klRNKjuWK5HJ_ZRb3U_Y611W51ciQJQ-DMDtwhXZT4loPLib8kTxzbcnyLgu-QRTHsYhOLK9Z6fvqbdN59ExXn54I-0-jdxnyaZZU8dRiNSBhwhBPleQw-NBZFjvh_1qWXEvIijD1Xh3mWCjfZMRkFfWf-Njnh5uzfuyLYdT65w7lGFDP7DUzKFf7Y07B4Dud5qSM3z7tbdsB6YHvqCVL76HXODKzojZz_uagkPF3NESKqd-Hz8aswZ1yBIa7d3lBrtX3ZBP6ljqtcEsB30kCkJm8j9GOG976pHYUNBEbprNrPcIXjqTkH788O-X8rJFJRJqZLdOignXNJ5OoLNVJ_IUtQE8QtiJozXwFuFS2PQg4P-Zai_uET_6oGavdvihKFMC9p4DMNiNTXMHtNVCQ_97i1AEv978eeOasdTmhL6Pzn5sK5vojZh6RBlG5rWiPumb08K0kgvJ-l7yh2G_HOt6PBo5JJuv1IRMI8aPguYqzvjmgPeutKJlbE0Rx6dAOMYCcYX03dDhwvkdYtKtQkhVJJbL5oX36d-Zj7v4WnOdj1YcRt60tfb_LR9mz4eiociHIIZZribshXl6d_Y0JtVlHsenrh5N2O8g6XAu0DqvP1A7mBZ10t2Xr9Ej_wvqlUYm9Q2n7uCklOzRuj9hvZvPbdhIh9rE_w5_2Iv0YfckXzB-8wiz4oa2Oa1y9zcKVZBYtu7sEz8qtg3PTwTPavaOPVv8GS5mT838eKz-PlcH5gtgkYjXVtEhb2rX2iKRYlzb7vczyxPqmPMFsefLokKWvLvSrRjYgaGH9txN7Hsyu5Ex4vMrS9HPvutQJa6rF8zdeADyI4rYIZ7A7fYKj1TT0EHJ6FAH6MK_-X7uYg94EOxQyEQdpsxAZRcFulB9jq-vfnTg5YCy7n814Z0BLhP2NZCYwcHFdeaXvgrLBbv9-9bQRe9XvjRQ5orAv8nPTbFMbclTbiEgrRhgVSyltMfYCo_zoh4tir4yZB8PTSnbGKGfdfozVwRbWj02OasFMCCCxAsyMONITOauYQKVraHpbGhy6hxy3jMWIed6zcAUo41MKFlYr6mPREoI7LnfXLwQQ3dRnwnBsmmIrjTnHX2BtXVeX3Hny2nbecVMRcP2dZNYHzNUMOARpsrquvj7EPIbNExY1-iodVS34oXbdCgEwp6pc6w1I2UILFGRJIiI2lvOXvETPUecwzb1CbNph3sk8V_sW1itGzzH0AG-cLnlgxOneRMWVMbewuvz5XWkvWNYG2OjRtjKAZSNaB8dRL7n2un_63vTs_T8KnlsgePI_XZSOwtJvs"
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