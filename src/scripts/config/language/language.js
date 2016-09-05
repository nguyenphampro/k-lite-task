
function language ($translateProvider) {
  $translateProvider
    .useStaticFilesLoader({
      prefix: 'i18n/',
      suffix: '.json'
    })
    .preferredLanguage('en')
    .useSanitizeValueStrategy('escapeParameters')
    .useCookieStorage()
}
