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
      url:'/home/:itemUrl',
      templateUrl: 'static/home.html',
      controller: 'homeCtrl as hCtrl'
    })
    .state('about', {
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

app.factory('pages', function(){
  var o = {};

  o.list = [
    {pageUrl:"home",
     pageTitle: "Noby's NG1 Stack",
     pageStrapline: "Website made with Angular 1, Bootstrap, and SASS!",
     pageSections:[
      {itemUrl:"", itemTitle:"Welcome", itemContent:"Welcome to my site."},
      {itemUrl:"story", itemTitle:"Our story", itemContent:"content 1 abcd"},
      {itemUrl:"place", itemTitle:"Our place", itemContent:"content 2 abcd"},
      {itemUrl:"friends", itemTitle:"Our friends", itemContent:"content 3 abcd"},
      {itemUrl:"expertise", itemTitle:"Our Expertise", itemContent:"content 4 abcd"},
      {itemUrl:"actions", itemTitle:"Our actions", itemContent:"content 5 abcd"},
      {itemUrl:"discussion", itemTitle:"Discussions", itemContent:"content 6 abcd"},
      {itemUrl:"invention", itemTitle:"Our invention", itemContent:"content 7 abcd"},
      {itemUrl:"goals", itemTitle:"Our goals",itemContent:"content 8 abcd"}
      ]
    },
    {pageUrl:"about",
     pageTitle: "About us",
     pageStrapline: "",
     pageSections:[
      {itemUrl:"", itemTitle:"About us", itemContent:"Welcome to my site."},
      {itemUrl:"story", itemTitle:"Our story", itemContent:"content 1 abcd"},
      {itemUrl:"place", itemTitle:"Our place", itemContent:"content 2 abcd"},
      {itemUrl:"friends", itemTitle:"Our friends", itemContent:"content 3 abcd"},
      {itemUrl:"expertise", itemTitle:"Our Expertise", itemContent:"content 4 abcd"},
      {itemUrl:"actions", itemTitle:"Our actions", itemContent:"content 5 abcd"},
      {itemUrl:"discussion", itemTitle:"Discussions", itemContent:"content 6 abcd"},
      {itemUrl:"invention", itemTitle:"Our invention", itemContent:"content 7 abcd"},
      {itemUrl:"goals", itemTitle:"Our goals",itemContent:"content 8 abcd"}
      ]
    }
  ];

  o.getPage = function(pageEntered){
    function findByStateName(page){
      return page.pageUrl == pageEntered;
    }
    var page = o.list.filter(findByStateName);
    console.log("pageEntered: ", pageEntered);
    console.log("page: ", page[0]);
    return page[0];
  };

  o.getSection = function(pageEntered, sectionEntered){
    function findByStateParam(section){
      return section.itemUrl == sectionEntered;
    }
    var page = o.getPage(pageEntered);
    var section = page.pageSections.filter(findByStateParam);
    return section[0];
  };

  return o;
});

app.controller('mainCtrl', function($scope){
  $scope.parent = {};
  $scope.parent.addClass = "";
});

app.controller('landingCtrl', function($scope){
  var self = this;
  $scope.parent.addClass = "landingBackground";
});

app.controller('homeCtrl', ['$scope', '$state', '$stateParams','pages', function($scope, $state, $stateParams, pages){
  var self = this;
  $scope.parent.addClass = "";
  self.page = pages.getPage($state.current.name);
  self.section = pages.getSection($state.current.name, $stateParams.itemUrl);
}]);

app.controller('aboutCtrl', ['$scope', '$state', '$stateParams','pages', function($scope, $state, $stateParams, pages){
  var self = this;
  $scope.parent.addClass = "";
  self.page = pages.getPage($state.current.name);
  self.section = pages.getSection($state.current.name, $stateParams.itemUrl);
}]);

app.controller('imageGalleryCtrl', function($scope){
  var self = this;
  $scope.parent.addClass = "";
});

app.controller('contactCtrl', function($scope){
  var self = this;
  $scope.parent.addClass = "";
});
