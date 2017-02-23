'use strict';
angular.module('ExperimentApp')

.controller('MainCtrl', ['$scope', '$rootScope', '$resource', '$state', '$window', function ($scope, $rootScope, $resource, $state, $window) {

  $scope.detectmob = function() {
   if( navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
   ){
     console.log(true);
      return true;
    }
   else {
     console.log(false);
      return false;
    }
  }

  $scope.isDetectedMobile = $scope.detectmob();

  var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

    console.log(isMobile);
    $scope.isMobile = isMobile;

  // FOr testing purposes
  $scope.amountoftrials = 52;
  $scope.shouldWeSend = true  ;

  $scope.results = {
    rhythm: {
      // rhythm1: 'same',
      // rhythm2: 'same',
      // rhythm3: 'same',
      // rhythm4: 'different',
      // rhythm5: 'same',
      // rhythm6: 'same',
      // rhythm7: 'different',
    },
    melody: {},
    questionnaire: {}
  };

  $scope.addAnswer = function(test, answerobject){
    console.log(answerobject)
    $scope.results[test][answerobject.trialname] = answerobject.answer;
    console.log($scope.results)
  }

  $scope.saveForm = function(form){
    $scope.results.questionnaire = form;
  }

  // Define CreditCard class
  var ResultsToSend = $resource('https://sheetsu.com/apis/v1.0/58854e09d02d',
   {

   });

  $scope.postResults = function(results){
    var data = {};

    function collect() {
      var ret = {};
      var len = arguments.length;
      for (var i=0; i<len; i++) {
        for (p in arguments[i]) {
          if (arguments[i].hasOwnProperty(p)) {
            ret[p] = arguments[i][p];
          }
        }
      }
      return ret;
    }

    data = collect(results.rhythm, results.melody, results.questionnaire);

    var currentdate = new Date(),
        datetime = "Last Sync: " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/"
                    + currentdate.getFullYear() + " @ "
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes() + ":"
                    + currentdate.getSeconds();
    data.datetimeofsubmission = datetime;

    if ($scope.shouldWeSend == true){
      var newResultsToSend = new ResultsToSend(data);
      newResultsToSend.$save();
    }

    console.log(data);

    // After posting results, check if results are correct or incorrect

    $scope.amountCorrectRhythm = {number: 0, percentage: 0};
    $scope.amountCorrectMelody = {number: 0, percentage: 0};

    Object.keys($scope.results.rhythm).forEach(function(key,index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        if($scope.results.rhythm[key] == $scope.correctAnswersRhythm[key]){
          console.log($scope.results.rhythm[key], $scope.correctAnswersRhythm[key]);
          $scope.amountCorrectRhythm.number += 1;
          $scope.amountCorrectRhythm.percentage =  100 * $scope.amountCorrectRhythm.number / $scope.amountoftrials;
        }
    });

    Object.keys($scope.results.melody).forEach(function(key,index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        if($scope.results.melody[key] == $scope.correctAnswersMelody[key]){
          $scope.amountCorrectMelody.number += 1;
          $scope.amountCorrectMelody.percentage =  100 * $scope.amountCorrectMelody.number / $scope.amountoftrials;
        }
    });

    $state.go('results');
  }

  $scope.correctAnswersMelody = {
    melody1	: "different",
    melody2	: "same",
    melody3	: "same",
    melody4	: "different",
    melody5	: "different",
    melody6	: "same",
    melody7	: "same",
    melody8	: "different",
    melody9	: "different",
    melody10	: "same",
    melody11	: "same",
    melody12	: "different",
    melody13	: "same",
    melody14	: "same",
    melody15	: "same",
    melody16	: "different",
    melody17	: "same",
    melody18	: "different",
    melody19	: "same",
    melody20	: "different",
    melody21	: "different",
    melody22	: "different",
    melody23	: "different",
    melody24	: "different",
    melody25	: "different",
    melody26	: "different",
    melody27	: "same",
    melody28	: "same",
    melody29	: "different",
    melody30	: "same",
    melody31	: "same",
    melody32	: "same",
    melody33	: "same",
    melody34	: "different",
    melody35	: "same",
    melody36	: "different",
    melody37	: "same",
    melody38	: "same",
    melody39	: "different",
    melody40	: "same",
    melody41	: "different",
    melody42	: "same",
    melody43	: "different",
    melody44	: "same",
    melody45	: "different",
    melody46	: "different",
    melody47	: "different",
    melody48	: "same",
    melody49	: "same",
    melody50	: "different",
    melody51	: "different",
    melody52	: "same"
  };

  $scope.correctAnswersRhythm = {
    rhythm1	: "different",
    rhythm2	: "different",
    rhythm3	: "same",
    rhythm4	: "different",
    rhythm5	: "different",
    rhythm6	: "same",
    rhythm7	: "same",
    rhythm8	: "same",
    rhythm9	: "same",
    rhythm10	: "different",
    rhythm11	: "same",
    rhythm12	: "different",
    rhythm13	: "different",
    rhythm14	: "same",
    rhythm15	: "different",
    rhythm16	: "same",
    rhythm17	: "different",
    rhythm18	: "same",
    rhythm19	: "different",
    rhythm20	: "different",
    rhythm21	: "different",
    rhythm22	: "different",
    rhythm23	: "same",
    rhythm24	: "same",
    rhythm25	: "same",
    rhythm26	: "same",
    rhythm27	: "same",
    rhythm28	: "different",
    rhythm29	: "different",
    rhythm30	: "same",
    rhythm31	: "different",
    rhythm32	: "same",
    rhythm33	: "different",
    rhythm34	: "different",
    rhythm35	: "same",
    rhythm36	: "different",
    rhythm37	: "same",
    rhythm38	: "same",
    rhythm39	: "different",
    rhythm40	: "same",
    rhythm41	: "different",
    rhythm42	: "different",
    rhythm43	: "same",
    rhythm44	: "same",
    rhythm45	: "same",
    rhythm46	: "different",
    rhythm47	: "same",
    rhythm48	: "different",
    rhythm49	: "same",
    rhythm50	: "same",
    rhythm51	: "different",
    rhythm52	: "different"
  }

}])
