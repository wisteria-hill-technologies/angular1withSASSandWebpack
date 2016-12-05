var app = angular.module('myApp',['ngAnimate', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url:'/',
      template: '<h1>Home</h1>'
    })
    .state('about', {
      url:'/about',
      template: '<h1>About</h1>'
    });

});

app.controller('mainCtrl', function(){
  var self = this;
  self.message = "Hello, World!";
  self.list = [{name:'Dog', number: 4}, {name:'cat', number: 8}, {name:'mouse', number: 6}];
});
