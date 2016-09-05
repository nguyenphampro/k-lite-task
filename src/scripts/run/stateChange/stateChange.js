function stateChange ($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {
    $rootScope.RootTitle = 'Bix4x';
    $rootScope.MainTitle = toState.data.pageTitle;
    $rootScope.RootClass = toState.data.bodyClass;
  })
}
