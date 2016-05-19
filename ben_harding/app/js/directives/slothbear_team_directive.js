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
        this.firePlayer = function(player) {
          $scope.players.splice($scope.players.indexOf(player), 1);
        };
        this.addPlayer = function(player) {
          if (player.name && player.position) {
            $scope.players.push(player);
            $scope.player = {};
          }
        };
      }
    };
  });
};
