'use strict';
angular.module('ExperimentApp', [
  'ui.router',
  'ui.event',
  'ngResource'
])
.config(['$stateProvider', '$urlRouterProvider', '$resourceProvider', function($stateProvider, $urlRouterProvider, $resourceProvider) {

$urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'components/introduction/intro.html',
    })
    .state('consent', {
      url: '/consent',
      templateUrl: 'components/consent/consent.html',
    })
    .state('rhythminstructions', {
      url: '/rhythminstructions',
      templateUrl: 'components/rhythm/rhythminstructions.html',
    })
    .state('rhythm-practice-1', {
      url: '/rhythm-practice-1',
      templateUrl: 'components/rhythm/practice/rhythm-practice-1.html',
    })
    .state('rhythm-practice-2', {
      url: '/rhythm-practice-2',
      templateUrl: 'components/rhythm/practice/rhythm-practice-2.html',
    })
    .state('rhythm', {
      url: '/rhythm/:trial',
      templateUrl: 'components/rhythm/rhythm.html',
      controller: 'RhythmCtrl'
    })
    .state('melodyinstructions', {
      url: '/melodyinstructions',
      templateUrl: 'components/melody/melodyinstructions.html',
    })
    .state('melody-practice-1', {
      url: '/melody-practice-1',
      templateUrl: 'components/melody/practice/melody-practice-1.html',
    })
    .state('melody-practice-2', {
      url: '/melody-practice-2',
      templateUrl: 'components/melody/practice/melody-practice-2.html',
    })
    .state('melody', {
      url: '/melody/:trial',
      templateUrl: 'components/melody/melody.html',
      controller: 'MelodyCtrl'
    })
    .state('testfinished', {
      url: '/testfinished',
      templateUrl: 'components/test-finished/testfinished.html',
    })
    .state('questionnaire', {
      url: '/questionnaire',
      templateUrl: 'components/questionnaire/questionnaire.html',
      controller: 'QuestionnaireCtrl'
    })
    .state('results', {
      url: '/results',
      templateUrl: 'components/results/results.html',
    })
}]);
