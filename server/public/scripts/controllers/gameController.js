colorBlocks.controller('GameController', ['$scope', 'DataFactory', function($scope, DataFactory) {

console.log('game controller running');

var self = this;
self.colors = DataFactory.chosenColors;


// start game
init();

// resets game to the starting state
function init() {
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  console.log(self.colors.length);
  if(self.colors.length < 1) {
    self.colorPrompt = "Head over to the settings tab and add some colors " +
    "to start the Game!";
  } else {
    self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?'
  }
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    alert('You got it!\n\nNow try another!');
    init();
  } else {
    self.messageText = 'Oh no! You guessed wrong!';
  }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
