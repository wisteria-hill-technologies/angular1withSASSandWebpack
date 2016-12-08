var app = angular.module('myApp',['ngAnimate', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('landing', {
      url:'/',
      templateUrl: 'static/landing.html',
      controller: 'landingCtrl as landCtrl'
    })
    .state('home', {
      url:'/home',
      templateUrl: 'static/home.html',
      controller: 'homeCtrl'
    })
    .state('about', {
      url:'/about',
      templateUrl: 'static/about.html',
      controller: 'aboutCtrl'
    })
    .state('image-gallery', {
      url:'/image-gallery',
      templateUrl: 'static/image-gallery.html',
      controller: 'imageGalleryCtrl as igCtrl'
    })
    .state('contact', {
      url:'/contact',
      templateUrl: 'static/contact.html',
      controller: 'contactCtrl'
    });

});

app.controller('mainCtrl', function($scope){
  $scope.parent = {};
  $scope.parent.addClass = "";
});

app.controller('landingCtrl', function($scope){
  var self = this;
  $scope.parent.addClass = "landingBackground";
});

app.controller('homeCtrl', function($scope){
  var self = this;
  $scope.parent.addClass = "";
  self.message = "Hello, World!";
  self.list = [{name:'Dog', number: 4}, {name:'cat', number: 8}, {name:'mouse', number: 6}];
});

app.controller('aboutCtrl', function($scope){
  var self = this;
  $scope.parent.addClass = "";
});

app.controller('imageGalleryCtrl', function($scope){
  var self = this;
  $scope.parent.addClass = "";
});

app.controller('contactCtrl', function($scope){
  var self = this;
  $scope.parent.addClass = "";
});
