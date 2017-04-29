'use strict';
angular.module('ExperimentApp')

.controller('QuestionnaireCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'QUESTIONS', function ($scope, $rootScope, $state, $stateParams, QUESTIONS) {

  $scope.form = {};

  $scope.addQuestionnaireAnswer = function(question, answer){

    var answerobject = {
      trial: question,
      answer: answer
    }

    console.log(question, answer)
    $scope.saveForm($scope.form);
  }

}])
