colorBlocks.controller('SettingsController', ['DataFactory', function(DataFactory) {
  console.log("settings controller running");

  var self = this;

  self.DataFactory = DataFactory;

  self.colorsToChoose = DataFactory.colorsToChoose;

  self.chosenColor = "";

  self.chosenColors = DataFactory.chosenColors;

  self.chooseColors = function(color) {
    self.chosenColors.push(color);
    DataFactory.chosenColors = self.chosenColors;
  };

  console.log(self.colorsToChoose);

  self.deleteColor = function(color) {
    alert("Someday, this will remove the color from the game")
  }

}]);
