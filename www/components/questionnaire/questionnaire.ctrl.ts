'use strict';
angular.module('ExperimentApp')

.controller('QuestionnaireCtrl', function ($scope, $rootScope, $state, $stateParams, ConfigService, QUESTIONS) {

  $scope.que = QUESTIONS[ConfigService.language];
  console.log('Questionnaire is ' + ConfigService.language, $scope.que);

  $scope.form = {};

  $scope.addQuestionnaireAnswer = function(question, answer){

    var answerobject = {
      trial: question,
      answer: answer
    }

    console.log(question, answer)
    $scope.saveForm($scope.form);
  }

})
