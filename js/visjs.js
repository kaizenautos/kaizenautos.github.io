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
    var bearer = "Bearer dGvELhrpgYnqIpo-eVUCL3zasjf8IG13fKAlzmyOUOvXC8oDqvtg3MO_sR965KKEpu0S-saT1VGCHndBS_ZxCvnqFHX9ii5bKtHl0vGey493ek7Oz5hNFaIiSNv_cQopZozSW8pKRPG-EWzvfNVQA3QjSggb261_cDlM-6hbb7Nx5uoBssmg961F1ZswDWAEqV5_OUfBxVqKrekN5Klwh_b05F54dalqDscDaU4jkvVBfYL69CgQRS201h76J2Hn6m8pebv1qYN04wU-uLqGfNpMbJmPxK5iJ5ci5hF8JJfOGUVmsqupFAuV50ezpD2fJXNvQnnl68R4P9iptoYgVUqb2s9pT8cXQhFKw2A9iZR-lGeI5vCS3gbq4bDh08wMZ8hlwwdCZOVd7Ely4y3Zm5UXTs__q5BYUD9jaJws1K2ncAg1-irXvATDOV-q7NusGKmM1mpYcuxrcXwuBqXQzgh7Lir0ryU5trtfY6fs4_8wz5xXr9cFifwDYF86L8T4KD4WdXmgm8ipWf8e6p5CP7R8whDQNb88IHS_cEKL2KTrzQvvyFPQ9kEiVmSgsgHW5dMsy4o3Z0DmvQYPTxxaxMl6HHfxJyQXP4SkrvYtGcT99XDn1DlBaDjz7OIDK_79KHjcARfPXPYX347F6rwzuL-8R6XBxU84GEHYVRR74ax7fqzX7dLuyrd2DwKZbZLvh2UGudsf-UZajGLl9pdMp93vH6Hjx_pOucZoc_l6pbaj-jtCCiQiSJQus9aY-deUDaUfB3lLV5Mvfx-KC3Q77w66SWJXn_PXwLeuWAyraZV5WqaHs_fpPWBkuG_hOSvW_C8P0iXk4SsJ-ba58NK9CQ9cQuJ4KL8G_5GKdep47gfNtQGh8kFux8YmHlK160j_3mN9J83HwoSI7OBuubLBWYlo52wAD5pK4r0O41mSVUpVBnDGw4ICU3zY3TZAXeputZUxteQkm1IIhIxPT5dvU2ddI58DfqOIHJ4YL3K1AaBMN0fRQI9pGTESrWBR4ynLYmRImQrmA18Xf2EbYUt3pufWqVyHmMcweiittZMxMGZ41TluYwjm_ZrauomraFAdxxqkkfVIuAZI46-ezUMwPf4xxk-jGGLMLeXX3-Xlx4pcw3nBgb4sVmmnK9HNSzduKtubXpWf8U7CkFx3TusnXess17fY6mRsHCGDZ0cqY0asIb4OCHmMW17opgB8psldpu4_0ZPiCdkdHp3XStKA8X7PkfkELDKCIAW4uFVznpXpHbrypnB5wtABiXhNzNqHcPO-doqTB87bI1zL_KhuIBBJojQL28Pjrz-3kSIZPLeGXbOfpidx_0SX_NLJgnVOaRpw_aceMd7KDHMMgz6aY67GHHareIJ6jBjPD3lUJcFvUrcHKNczMaIMdBl13GNkuyXfM6U609CkSTOzYIU67aROGWnvEfgGvawphZuKsW968Mikt5mSTr9MpHbe1foR306UFs1pGTRxdCLCKf96LcTWFoq3rLxlFHWcDLWWLQTviYqS5dJ_BnEZT2MfY3AWOaE17lSHWi3jv33271AdwMKwYh6RbMfn64rujxd3OpKJhSwPSAFxWnDY5lssXnXkplJeO6DKaksabGTLNVo5cCW2rTnGInlryk9qN7GHTmKzGf-1XrYpiojjH9riLC4UKhZulhxh8-fIeNFKn98mZ5WWzOKfa9TbVb7AqUh1ilexzJl02qmGcm1so93iUuKd91atRrHTF8l-o9EMvgy9aiAlsLUozszdhVgWt4oL7E_qscbRhrqcIKwn_uu4kpUtF3Yb2Z6e42fGq3sKrC1nvEYioErHhBIVBvcgXRHQ9OB8gHVAMCSWUx_C_x4BnRS4KcJbTrjxAlDfkZOSnJ_MEEm3hxSq46turn-Rn7CZ9ZeP01DGf3zR60IcxUTmWaITAByLYpEcrVf5Jsj4nlxQop9Gggw4v6Nk-fDQkPelhkAIlzPPOXzp7P4x7jJ0gPKmkliieAfO-x3YQxSdiIhXN4_ki2ijc-2ggva-2DBkY9BKmsF-IP0YVR3wfNfbYgIGw78JQwRZDlRL4X3qii2pe2MVLY1Vjn6VWxlPqRG2jDc"
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