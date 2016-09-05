app.config(routerConfig)

function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      views: {
        '': {
          templateUrl: 'partials/home.html',
        },
        'nav': {
          templateUrl: 'children/nav.html',
        },
        'header': {
          templateUrl: 'children/header.html',
        },
        'footer': {
          templateUrl: 'children/footer.html',
        }
      },
      controller: 'HomeController',
      controllerAs: 'home',
      url: '/home',
      data: {
        pageTitle: 'Home',
        bodyClass: 'index'
      }
    })
    .state('pages', {
      views: {
        '': {
          templateUrl: 'partials/pages.html',
        },
        'nav': {
          templateUrl: 'children/nav.html',
        },
        'header': {
          templateUrl: 'children/header.html',
        },
        'footer': {
          templateUrl: 'children/footer.html',
        }
      },
      url: '/pages',
      controller: 'PagesController',
      controllerAs: 'pages',
      data: {
        pageTitle: 'Pages',
        bodyClass: 'pages'
      }
    })

  $urlRouterProvider.otherwise('/home')
  $locationProvider.html5Mode(true)
}

// https://github.com/angular-ui/ui-router/wiki/Quick-Reference#ui-sref
// https://github.com/angular-ui/ui-router/wiki#attach-custom-data-to-state-objects
