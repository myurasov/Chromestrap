var app = angular.module('Chromestrap', ['ui.router', 'ngMaterial']);

// routing
app.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/screen-example/tab-1');

    $stateProvider

      .state('screen-example', {
        url     : '/screen-example',
        abstract: true,
        views   : {
          screen: {
            templateUrl: '/views/screens/example.html'
          }
        }
      })

      .state('screen-example.tab', {
        url  : '/tab-{tabIndex}',
        views: {
          tab: {
            templateUrl: function ($stateParams) {
              return '/views/screens/example.tab-' + $stateParams.tabIndex + '.html';
            }
          }
        }
      });
  }
);
