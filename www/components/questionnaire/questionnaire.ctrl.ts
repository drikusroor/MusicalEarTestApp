'use strict';
angular.module('ExperimentApp')

.controller('QuestionnaireCtrl', function ($scope, $rootScope, $state, $stateParams, ConfigService, QUESTIONS) {

  function setQuestions(language) {
    try {
      $scope.que = QUESTIONS[language];
    } catch(e) {
      console.log(e);
      $scope.que = QUESTIONS.NL;
    }
    console.log('Questionnaire is ' + ConfigService.language, $scope.que);
  }

  // set $scope.que to the QUESTIONS in the right language
  setQuestions(ConfigService.language);

  // INIT empty form
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
