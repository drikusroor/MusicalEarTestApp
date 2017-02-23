'use strict';
angular.module('ExperimentApp', [

  'ui.router',
  'ui.event',
  'ngResource'


  // 'ui.rCalendar'
])
.config(['$stateProvider', '$urlRouterProvider', '$resourceProvider', function($stateProvider, $urlRouterProvider, $resourceProvider) {

$urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/intro.html',
    })
    .state('consent', {
      url: '/consent',
      templateUrl: 'views/consent.html',
    })
    .state('rhythminstructions', {
      url: '/rhythminstructions',
      templateUrl: 'views/rhythminstructions.html',
    })
    .state('rhythm', {
      url: '/rhythm/:trial',
      templateUrl: 'views/rhythm.html',
      controller: 'RhythmCtrl'
    })
    .state('melodyinstructions', {
      url: '/melodyinstructions',
      templateUrl: 'views/melodyinstructions.html',
    })
    .state('melody', {
      url: '/melody/:trial',
      templateUrl: 'views/melody.html',
      controller: 'MelodyCtrl'
    })
    .state('testfinished', {
      url: '/testfinished',
      templateUrl: 'views/testfinished.html',
    })
    .state('questionnaire', {
      url: '/questionnaire',
      templateUrl: 'views/questionnaire.html',
      controller: 'QuestionnaireCtrl'
    })
    .state('results', {
      url: '/results',
      templateUrl: 'views/results.html',
    })
}]);
