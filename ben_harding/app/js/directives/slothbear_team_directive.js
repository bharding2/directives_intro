module.exports = function(app) {
  app.directive('slothbearTeam', function() {
    return {
      restrict: 'EAC',
      replace: true,
      transclude: true,
      templateUrl: 'templates/team.html',
      scope: {
        players: '=',
        teamName: '@'
      },
      controller: function($scope) {
        var newPlayer = {};
        this.firePlayer = function(player) {
          $scope.players.splice($scope.players.indexOf(player), 1);
        };
        this.addPlayer = function(newPlayer) {
          if (newPlayer.name && newPlayer.position) {
            this.players.push(newPlayer);
            newPlayer = {};
          }
        };
      }
    };
  });
};
