const angular = require('angular');
const fakeApp = angular.module('fakeApp', []);

require('./directives')(fakeApp);

fakeApp.controller('TeamsController', function() {
  this.fcSlothbear = [
    { name: 'Normand Harvey', position: 'Inner Midfielder' },
    { name: 'Izcautzin Arizmendi', position: 'Winger' },
    { name: 'Bernard Boulanger', position: 'Forward' },
    { name: 'Elwood Finch', position: 'Withdrawn Forward' },
    { name: 'Nikos Galanos', position: 'Forward' },
    { name: 'Roger Wilcox', position: 'Attacking Midfielder' },
    { name: 'Randy Baribeau', position: 'Winger' }
  ];

  this.filthyBears = [
    { name: 'Tashard Travis', position: 'Winger' },
    { name: 'Julius Walker-Medley', position: 'Withdrawn Forward' },
    { name: 'Colt Seavers', position: 'Midfielder' },
    { name: 'Michael Goosey', position: 'Winger' },
    { name: 'George Holmstead', position: 'Attacking Midfielder' },
    { name: 'Muhammad Edwards', position: 'Midfielder' },
    { name: 'Gaspar Duran', position: 'Wingback' }
  ];
});

// fakeApp.run(['$rootScope', function($rootScope) {
//   $rootScope.players = [
//     { name: 'Normand Harvey', position: 'Inner Midfielder' },
//     { name: 'Izcautzin Arizmendi', position: 'Winger' },
//     { name: 'Bernard Boulanger', position: 'Forward' },
//     { name: 'Elwood Finch', position: 'Withdrawn Forward' },
//     { name: 'Nikos Galanos', position: 'Forward' },
//     { name: 'Roger Wilcox', position: 'Attacking Midfielder' },
//     { name: 'Randy Baribeau', position: 'Winger' }
//   ];
// }]);
