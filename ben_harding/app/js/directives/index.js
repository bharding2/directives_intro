module.exports = function(app) {
  require('./slothbear_player_directive')(app);
  require('./slothbear_team_directive')(app);
  require('./slothbear_add_player_directive')(app);
};
