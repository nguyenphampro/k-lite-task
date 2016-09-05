function MainController ($scope, $http, $timeout, $mdSidenav, $mdUtil, $log, $translate, appConfig, $sce) {
  // Call Global 
  $scope.config = appConfig;
  // Toggle Menu 
  $scope.toggleLeft = buildToggler('left')
  $scope.toggleRight = buildToggler('right')
  function buildToggler (componentId) {
    var debounceFn = $mdUtil.debounce(function () {
      $mdSidenav(componentId)
        .toggle()
        .then(function () {
          $log.debug('toggle ' + componentId + ' is done')
        })
    }, 0)
    return debounceFn
  }
  // Change Language 
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey)
  }
  // Read API 
  $scope.$watch('fechAPI', function () {
    fetch($http, $scope, 'config')
  })
}
