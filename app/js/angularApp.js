var app = angular.module('myApp',['ngAnimate', 'ui.router']);

app.controller('mainCtrl', function(){
  var self = this;
  self.message = "Hello, World!";
});
