module.exports = function(app) {
  app.directive('addPlayer', function() {
    return {
      retrict: 'EAC',
      templateUrl: 'templates/task_item.html',
      require: '^slothbearTeam',
      scope: {
        player: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.addPlayer = controller.addPlayer;
      }
    };
  });
};
