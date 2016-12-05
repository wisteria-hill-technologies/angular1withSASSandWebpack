var app = angular.module('myApp',['ngAnimate', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'static/home.html',
      controller: 'mainCtrl as mCtrl'
    })
    .state('about', {
      url:'/about',
      templateUrl: 'static/about.html'
    })
    .state('contact', {
      url:'/contact',
      templateUrl: 'static/contact.html'
    });

});

app.controller('mainCtrl', function(){
  var self = this;
  self.message = "Hello, World!";
  self.list = [{name:'Dog', number: 4}, {name:'cat', number: 8}, {name:'mouse', number: 6}];
});
