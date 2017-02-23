'use strict';
angular.module('ExperimentApp')

.controller('MelodyCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function ($scope, $rootScope, $state, $stateParams) {

  var trial = parseInt($stateParams.trial);
  $scope.trial = trial
  $scope.nexttrial = parseInt(trial) + 1;
  $scope.filename = "assets/audio/melody/Mel_" + $scope.trial + ".mp3";

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

  $scope.addMelodyAnswer = function(trial, answer){
    var answerobject = {
      trialname: "melody" + trial,
      answer: answer
    }

    $scope.addAnswer("melody", answerobject);
    $scope.showRadio = false;
    $scope.showNextButton = true;

    if (0 < $scope.trial && $scope.trial < $scope.amountoftrials){
      $state.go('melody', {trial: $scope.nexttrial});
    } else if ($scope.trial == $scope.amountoftrials) {
      $state.go('testfinished');
    }
  }

}])
