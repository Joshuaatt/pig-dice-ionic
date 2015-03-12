angular.module('PigDice.controllers', [])

.controller('PigAiCtrl', ['$scope', '$state', 'PigAiFactory',
function PigAiCtrl($scope, $state, PigAiFactory){

  $scope.PigAiFactory = PigAiFactory;
  $scope.activePlayer = PigAiFactory.activePlayer;

  $scope.rollDice = function(){
    $scope.p1score = PigAiFactory.player1;
    $scope.computerScore = PigAiFactory.computer;
    $scope.currentScore = PigAiFactory.currentScore;
    $scope.roll = PigAiFactory.rollDice();
    PigAiFactory.checkWinner();
  },

  $scope.hold = function(){
    $scope.p1score = PigAiFactory.player1;
    $scope.computerScore = PigAiFactory.computer;
    PigAiFactory.hold();
    $scope.currentScore = PigAiFactory.currentScore;
    PigAiFactory.checkWinner();
  },

  $scope.p = function(playerNumber){
    if(PigAiFactory.activePlayer===playerNumber){

      return true;
    }else {
      return false;
    }
  }
}])

.controller('PigDiceCtrl', ['$scope', '$state', 'PigFactory',
function PigDiceCtrl($scope, $state, PigFactory){

  $scope.PigFactory = PigFactory;
  $scope.activePlayer = PigFactory.activePlayer;
  $scope.playerActive = false;


  $scope.rollDice = function(){
    $scope.roll = PigFactory.rollDice();
    $scope.currentScore = PigFactory.currentScore;
    PigFactory.checkWinner();
  },

  $scope.hold = function(){
    PigFactory.hold();
    $scope.p1score = PigFactory.player1;
    $scope.p2score = PigFactory.player2;
    $scope.currentScore = PigFactory.currentScore;
    PigFactory.checkWinner();
  },

  $scope.p = function(playerNumber){
    if(PigFactory.activePlayer===playerNumber){
      $scope.playerActive = true;
      return true;
    }else {
      return false;
    }
  }

}]);
