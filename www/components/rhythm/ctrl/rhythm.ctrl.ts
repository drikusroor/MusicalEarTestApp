'use strict';
angular.module('ExperimentApp')

.controller('RhythmCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function ($scope, $rootScope, $state, $stateParams) {

  var trial = parseInt($stateParams.trial);
  $scope.trial = trial
  $scope.nexttrial = parseInt(trial) + 1;
  $scope.filename = "assets/audio/rhythm/Rhy_" + $scope.trial + ".mp3";

  $scope.hideAudio = false;
  $scope.showRadio = false;

  $scope.playAudio = function(){
    $("audio").trigger("play");
    $scope.hideAudio = true;
  }

  $scope.initAudio = function() {
    if($scope.isMobile !== true && $scope.isDetectedMobile !== true) {
      $scope.playAudio();
    }
  }

  $scope.initAudio();

  $scope.showRadio = function(){
    $scope.showRadio = true;
  }

  $scope.addRhythmAnswer = function(trial, answer){

    var answerobject = {
      trialname: "rhythm" + trial,
      answer: answer
    }

    $scope.addAnswer("rhythm", answerobject);

    $scope.showRadio = false;
    $scope.showNextButton = true;

    if (0 < $scope.trial && $scope.trial < $scope.amountoftrials){
      $state.go('rhythm', {trial: $scope.nexttrial});
    } else if ($scope.trial == $scope.amountoftrials) {
      $state.go('melodyinstructions');
    }

  }

}])
