angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.survey'
      2) Using $state.go programatically:
        $state.go('tabsController.survey');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab5/page3
      /page1/tab1/page3
  */
  .state('tabsController.survey', {
    url: '/page3',
    views: {
      'tab5': {
        templateUrl: 'templates/survey.html',
        controller: 'surveyCtrl'
      },
      'tab1': {
        templateUrl: 'templates/survey.html',
        controller: 'surveyCtrl'
      }
    }
  })

  .state('tabsController.results', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/results.html',
        controller: 'resultsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.page7', {
    url: '/page1',
    views: {
      'tab5': {
        templateUrl: 'templates/page7.html',
        controller: 'page7Ctrl'
      }
    }
  })

  .state('tabsController.login', {
    url: '/page8',
    views: {
      'tab5': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.signup', {
    url: '/page9',
    views: {
      'tab5': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('tabsController.feedback', {
    url: '/page11',
    views: {
      'tab2': {
        templateUrl: 'templates/feedback.html',
        controller: 'feedbackCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page1')


});