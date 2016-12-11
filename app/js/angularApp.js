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

app.factory('pages', function(){
  var o = {};

  o.list = [
    {pageTitle:"home",
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
    {pageTitle:"about",
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
    }
  ];

  o.getPage = function(pageEntered){
    function findByStateName(page){
      return page.pageTitle == pageEntered;
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
  var page = pages.getPage($state.current.name);
  self.sections = page.pageSections;

  console.log('$stateParams.itemUrl: ', $stateParams.itemUrl);
  self.section = pages.getSection($state.current.name, $stateParams.itemUrl);

  console.log("$state: ", $state.current.name);
  console.log("self.sections: ", self.sections);
    console.log("self.section: ", self.section);
  // console.log("self.section: ", self.section);
//   function findByStateName(page){
//     return page.pageTitle == $state.current.name;
//   }
//
//   function findByStateParam(pageSection){
//     // console.log("pageSection:", pageSection.itemUrl);
//     return pageSection.itemUrl == $stateParams.itemUrl;
//   }
//
//   var page = pages.list.filter(findByStateName);
//   console.log("page: ", page[0].pageSections);
//
//   self.sections = page[0].pageSections;
//   var pageSection = page[0].pageSections.filter(findByStateParam);
//   // console.log("$state: ", $state.current.name);
//   // console.log("$stateParams: ", $stateParams);
//   // console.log("pageSection[0]: ", pageSection[0]);
//   // console.log("pageSection.itemUrl: ", pageSection[0].itemUrl);
//   if($stateParams.itemUrl === ""){
//     pageSection = page[0].pageSections[0];
//     // console.log("no param so item should be first one:", item);
//     self.section = pageSection;
//   } else {
//     self.section = pageSection[0];
//   }
//
// }]);
//
// app.controller('aboutCtrl', function($scope, $stateParams){
//   var self = this;
//   $scope.parent.addClass = "";
//
//   self.list = [
//     {itemUrl:"", itemTitle:"About us", itemContent:
//     "fdsafdsafdsafdsafdsafs"
//     },
//     {itemUrl:"story", itemTitle:"Our story", itemContent:"content 1 abcd"},
//     {itemUrl:"place", itemTitle:"Our place", itemContent:"content 2 abcd"},
//     {itemUrl:"friends", itemTitle:"Our friends", itemContent:"content 3 abcd"},
//     {itemUrl:"expertise", itemTitle:"Our Expertise", itemContent:"content 4 abcd"},
//     {itemUrl:"actions", itemTitle:"Our actions", itemContent:"content 5 abcd"},
//     {itemUrl:"discussion", itemTitle:"Discussions", itemContent:"content 6 abcd"},
//     {itemUrl:"invention", itemTitle:"Our invention", itemContent:"content 7 abcd"},
//     {itemUrl:"goals", itemTitle:"Our goals",itemContent:"content 8 abcd"}
//   ];
//
//   function findByStateParam(obj){
//     // console.log("obj:", obj.itemUrl);
//     if(obj.itemUrl == $stateParams.itemUrl){
//       // console.log("Match!");
//     }
//     return obj.itemUrl == $stateParams.itemUrl;
//   }
//   var item = self.list.filter(findByStateParam);
//   // console.log("$stateParams: ", $stateParams.itemUrl);
//   // console.log("item[0]: ", item[0]);
//   // console.log("item.itemUrl: ", item[0].itemUrl);
//   if (item.length < 1) {
//     item = self.list[0];
//     // console.log("no param so item should be first one:", item);
//     self.section = item;
//   } else {
//     self.section = item[0];
//   }

}]);

app.controller('imageGalleryCtrl', function($scope){
  var self = this;
  $scope.parent.addClass = "";
});

app.controller('contactCtrl', function($scope){
  var self = this;
  $scope.parent.addClass = "";
});
