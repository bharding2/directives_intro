module.exports = function(app) {
  app.directive('slothbearAddPlayer', function() {
    return {
      retrict: 'EAC',
      templateUrl: 'templates/add_player.html',
      require: '^slothbearTeam',
      transclude: true,
      scope: {
        player: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.player = {};
        scope.addPlayer = controller.addPlayer;
      }
    };
  });
};
