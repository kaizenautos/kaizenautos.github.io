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
    var bearer = "Bearer 4Jkie5GBsgv9J2-mUMqaZwzZm-4gBJO2YQm3hEo7RVMMKNPvuk-QDhXkKZswkFPS_VGQ6JGR3gZO-PVBFxXYoy5wcKDkD8oyJRfmT1pokSHH4vH1IlBYPUUcgDsIZZ_49u86_iEeOthg9J_llJfXOG_D9YeHj4trQt2KtTe6HjOFu9lIqB8S2TMIfmh5zMswwBpX7Vp2OqnNpJqJQTCk27-Eq2zRsgYPwu9t5oMMiyS-OhUDQBcBTM0iHWCNjmLnBu9aS5-xNL-zuJSOpHFTETFbI11KifWZM22-Lb782sbNXrgW8phanLEHeAJXtJ1d4jll92oj51nj4Z41I8kmA9UA3bZJgGoqU53tQv4AoJGr56jKzw2t-Pvy4LuN5yrLIXtNlba96bwrEnOKUVbeHLPcWL8-vWnRIFU-B1gzXp0nIqIST2Iv_1ZoVUwLqzod2PTR_sIYS2tXyBLEhgS8fSbtZOIkY8uPRMYMNnjOrPK9VOJtNlqF--OCACgyefZHwX87rQZlKlSgjVAVDP1S0hliLS8gAgOvNva3umNE811rjGhNiFbpJLLOZxZpyBFDc3FGRl1tJ6Ix3FsIrp9eLHYkMdNme_6seRtGAOfgDfsp_prWcx5lN2gEgcTJkAZ9Ia2yUucK0iukmdDWN15mWWgFJ-uAgQS-7WTlWq3ryomt-8vvjYNiD7AxRnTragVx8wJ5og2eAvuSbr6sH0_n_ILRMrt5omNifCJAx-gQbmY4M2M14V-ls7Wt5laUJ1jGDCsVld8FRWGK-Qd-RPJajrve9pSK9be_vKl0laP205ySQgmFIzETvUGb6rB7Uiypm0ZbEYRWYEbTB0d07eCR9szUh1Cd-rlR10FjT8MySghprcu5KPKlZ9wPMQVSwlCUG3JmUuNUMLaPXH8mWMkhAmzL-jvQC5s201yuSv1foFjoyDq7cdEPNtZCWWtrZXiJ6YAKN3DB24qUWCEocYEss38v7sWsawKV6Oek1XywoGJH92ybAd69f6FcWmZaBDxoDWmWcJeMbrHl7pM9a0WKsuJ5UdjqAWlYbXoT0IqAWaTtJ8X8U8V5WqdchMk9cAUesPNFK1FzvPb1_ZQfeUfDsQeuznFDTDJHRKeo8zofSgE9iutQ0Xd_NZKJedOoO0Rry0x5o0Uxl6x19760HR6IMrdsLoqlsxJwLpI3fFIy9yJhEepYlAE3KuSUH4EbgUmhis5Jq_bbcOxRAdbOepBmGH_5MazMRZWqkzoVjnYrRbCsCvumHQgh497F_NJ7rHUcjX7C3fdC8Ad0mF7Jcixyv65YnkF_aYOvChkHByYqtv3YniWBDUF1oL7J-FL0rVd49AY26EdWP8z9TXryBLHdAKBoWSLuEjTOnzO6wK7Lee1GvQYJXrfO6NImXbntxGPW8qYsBtFxnByHhtnKA8QV6EmC_S1eriZ9znVEYKiTUysrhwjhdmbOp3vVj3v5U5lClZ5WPMz-VHZ4tVQ5q0J3yE6xtthlhITcDxpzJqU7O_ad034EdaMZei2gGebSNJotZ-ySMqvHdPaLFnZztf4_OKLZuBaxHGUouqNMoUQPU7h98yaqj8F-jVeOQO_HyFXNY001Ie2r08Hy6AO4ndB-RithVs-GxT3iaJm5V-2dXa-LLjFkJZtGUeV0my3fal_fPjjdbNViKhqwHNbPWDQuRal8azNfoYeYdzoEdz4uFN2eGXs3hXmI8sssaJqdhNmqcqbJaqrBHb53FWRsTGNXDA81WIF0GODHT6k1sGP_DelCioFkypFFKiZHw_prSxBPpLfhpzXObm5-kQTqKxhCwOeTF7LLcjQSKn3byrqgUSRVLyqr5zQRjCD3Mqk-LbxGEaTvf-6PoW8Fy-h-Xny0l2EjMWhZl90y34NHrrd54F9ngfHGatrAjn4pCwtNrTeZ4IEu1U6B8orrokoZDzypiyr-X9THdySedOeH2HPE4Sv-Rx2VA7ILXsOwYKooZ96mTcNDsTsnh0DEv7Lq9rem30c9I2L10S_KUeJn8wl8oEztZj3Bql6SHrejrhpsrafZWziYSj8VTqSm6Ickqzvqz46IomB8fUauNQ2xksIgWNM"
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