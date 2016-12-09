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
      controller: 'homeCtrl as hCtrl'
    })
    .state('homeSection', {
      url:'/home/:itemUrl',
      templateUrl: 'static/home.html',
      controller: 'homeCtrl as hCtrl'
    })
    .state('about', {
      url:'/about',
      templateUrl: 'static/about.html',
      controller: 'aboutCtrl as aCtrl'
    })
    .state('aboutSection', {
      url:'/about/:itemUrl',
      templateUrl: 'static/about.html',
      controller: 'aboutCtrl as aCtrl'
    })
    .state('image-gallery', {
      url:'/image-gallery',
      templateUrl: 'static/image-gallery.html',
      controller: 'imageGalleryCtrl as igCtrl'
    })
    .state('contact', {
      url:'/contact',
      templateUrl: 'static/contact.html',
      controller: 'contactCtrl as cCtrl'
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

app.controller('homeCtrl', function($scope, $stateParams){
  var self = this;
  $scope.parent.addClass = "";

  self.list = [
    {itemUrl:"", itemTitle:"Welcome", itemContent:"Welcome to my site."},
    {itemUrl:"story", itemTitle:"Our story", itemContent:"content 1 abcd"},
    {itemUrl:"place", itemTitle:"Our place", itemContent:"content 2 abcd"},
    {itemUrl:"friends", itemTitle:"Our friends", itemContent:"content 3 abcd"},
    {itemUrl:"expertise", itemTitle:"Our Expertise", itemContent:"content 4 abcd"},
    {itemUrl:"actions", itemTitle:"Our actions", itemContent:"content 5 abcd"},
    {itemUrl:"discussion", itemTitle:"Discussions", itemContent:"content 6 abcd"},
    {itemUrl:"invention", itemTitle:"Our invention", itemContent:"content 7 abcd"},
    {itemUrl:"goals", itemTitle:"Our goals",itemContent:"content 8 abcd"}
  ];

  function findByStateParam(obj){
    // console.log("obj:", obj.itemUrl);
    if(obj.itemUrl == $stateParams.itemUrl){
      // console.log("Match!");
    }
    return obj.itemUrl == $stateParams.itemUrl;
  }
  var item = self.list.filter(findByStateParam);
  // console.log("$stateParams: ", $stateParams.itemUrl);
  // console.log("item[0]: ", item[0]);
  // console.log("item.itemUrl: ", item[0].itemUrl);
  if (item.length < 1) {
    item = self.list[0];
    // console.log("no param so item should be first one:", item);
    self.section = item;
  } else {
    self.section = item[0];
  }

});

app.controller('aboutCtrl', function($scope, $stateParams){
  var self = this;
  $scope.parent.addClass = "";

  self.list = [
    {itemUrl:"", itemTitle:"About us", itemContent:
    "fdsafdsafdsafdsafdsafs"
    },
    {itemUrl:"story", itemTitle:"Our story", itemContent:"content 1 abcd"},
    {itemUrl:"place", itemTitle:"Our place", itemContent:"content 2 abcd"},
    {itemUrl:"friends", itemTitle:"Our friends", itemContent:"content 3 abcd"},
    {itemUrl:"expertise", itemTitle:"Our Expertise", itemContent:"content 4 abcd"},
    {itemUrl:"actions", itemTitle:"Our actions", itemContent:"content 5 abcd"},
    {itemUrl:"discussion", itemTitle:"Discussions", itemContent:"content 6 abcd"},
    {itemUrl:"invention", itemTitle:"Our invention", itemContent:"content 7 abcd"},
    {itemUrl:"goals", itemTitle:"Our goals",itemContent:"content 8 abcd"}
  ];

  function findByStateParam(obj){
    // console.log("obj:", obj.itemUrl);
    if(obj.itemUrl == $stateParams.itemUrl){
      // console.log("Match!");
    }
    return obj.itemUrl == $stateParams.itemUrl;
  }
  var item = self.list.filter(findByStateParam);
  // console.log("$stateParams: ", $stateParams.itemUrl);
  // console.log("item[0]: ", item[0]);
  // console.log("item.itemUrl: ", item[0].itemUrl);
  if (item.length < 1) {
    item = self.list[0];
    // console.log("no param so item should be first one:", item);
    self.section = item;
  } else {
    self.section = item[0];
  }

});

app.controller('imageGalleryCtrl', function($scope){
  var self = this;
  $scope.parent.addClass = "";
});

app.controller('contactCtrl', function($scope){
  var self = this;
  $scope.parent.addClass = "";
});
