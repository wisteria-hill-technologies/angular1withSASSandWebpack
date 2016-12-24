require('angular');
require('angular-ui-router');
require('angular-animate');

var app = angular.module('myApp',['ngAnimate', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider, $locationProvider){
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|chrome-extension):/);

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('landing', {
      url:'/',
      templateUrl: 'static/landing.html',
      controller: 'landingCtrl as landCtrl'
    })
    .state('home', {
      url:'/home',
      templateUrl: 'static/pages.html',
      controller: 'pageCtrl as pCtrl'
    })
    .state('homeSections', {
      url:'/home/:itemUrl',
      templateUrl: 'static/pages.html',
      controller: 'pageCtrl as pCtrl'
    })
    .state('about', {
      url:'/about',
      templateUrl: 'static/pages.html',
      controller: 'pageCtrl as pCtrl'
    })
    .state('aboutSections', {
      url:'/about/:itemUrl',
      templateUrl: 'static/pages.html',
      controller: 'pageCtrl as pCtrl'
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
  $locationProvider.html5Mode(true);

});

app.factory('pages', function(){
  var o = {};

  o.list = [
    {pageUrl:"home",
     pageJumbotron: "walk2",
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
     pageJumbotron: "grass",
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
    },
    {pageUrl:"contact",
     pageJumbotron: "contact",
     pageTitle: "Contact us",
     pageStrapline: "",
     pageParagraph: "biomimicry Al Gore rebound effect Our Common Future less aesthetics more ethics FSC anthropocene SIGMA Guidelines land-grabbing CSR activism LOVOS artisan WRAP biodiversity C2C bicycle Is Beautiful coral reef slow baking zero waste freegan long-term fair solidarity re-examine Gross Domestic Happiness footprint taste-the-waste foodcoops transparency scenarios ecosystem services liftclub time..",
     pageSections:[]
   },
   {pageUrl:"image-gallery",
    pageJumbotron: "grass",
    pageTitle: "Image Gallery",
    pageIconClass: "glyphicon glyphicon-picture",
    pageStrapline: "",
    pageSections:[],
    galleryImages:[
      {imgDesc:'At Garden', img: '../images/cat.jpg' },
      {imgDesc:'Cat', img: '../images/cat.jpg' },
      {imgDesc:'Light', img: '../images/cat.jpg' },
      {imgDesc:'Maths build', img: '../images/cat.jpg' },
      {imgDesc:"Let's contact", img: '../images/cat.jpg' },
      {imgDesc:'Walk', img: '../images/cat.jpg' }
    ]
   }
  ];

  o.getPage = function(pageEntered){
    function findByStateName(page){
      return page.pageUrl == pageEntered;
    }
    var page = o.list.filter(findByStateName);
    // console.log("pageEntered: ", pageEntered);
    // console.log("page: ", page[0]);
    return page[0];
  };

  o.getSection = function(pageEntered, sectionEntered){
    if(!sectionEntered){
      sectionEntered = "";
    }
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
  $scope.parent.addClass = "landingBackground";
});

app.controller('pageCtrl', ['$scope', '$state', '$stateParams', 'pages', '$location', function($scope, $state, $stateParams, pages, $location){

  // console.log("$location.$$url:", $location.$$url);
  // console.log("stateParams.itemUrl:", $stateParams.itemUrl);

  $scope.parent.addClass = "";
  $scope.page = pages.getPage($location.$$url.split('/')[1]);

  $scope.section = pages.getSection($location.$$url.split('/')[1], $stateParams.itemUrl);

}]);

app.controller('imageGalleryCtrl', ['$scope', '$state', '$stateParams', 'pages', function($scope, $state, $stateParams, pages){
  $scope.parent.addClass = "";
  $scope.page = pages.getPage($state.current.name);
  $scope.section = pages.getSection($state.current.name, $stateParams.itemUrl);
  $scope.imgList = $scope.page.galleryImages;
  // $scope.loading = true;
  // $scope.startSpin = function(){
  //       usSpinnerService.spin('spinner-1');
  // };
  // $scope.stopSpin = function(){
  //     usSpinnerService.stop('spinner-1');
  // };
  // $scope.startSpin();
  // $scope.$on('$viewContentLoaded', function(){
  // //view content is fully loaded !!
  //   $scope.loading = false;
  // });
}]);

app.controller('contactCtrl', ['$scope', '$state', '$stateParams', 'pages', '$http', function($scope, $state, $stateParams, pages, $http){
  $scope.parent.addClass = "";
  $scope.page = pages.getPage($state.current.name);
  $scope.section = pages.getSection($state.current.name, $stateParams.itemUrl);

  $scope.submit = function(){

    // if(!$scope.name || $scope.name ==='') {
    //   return;
    // }
    // if(!$scope.email || $scope.email ==='') {
    //   return;
    // }
    // if(!$scope.subject || $scope.subject ==='') {
    //   return;
    // }
    // if(!$scope.message || $scope.message ==='') {
    //   return;
    // }

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/postContact",
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "data": {
        "name": $scope.name,
        "email": $scope.email,
        "subject": $scope.subject,
        "message": $scope.message
      }
    };

    $http(settings).then(function(response){
      if(response.data.success){
        $scope.name = "";
        $scope.email = "";
        $scope.subject = "";
        $scope.message = "";
        $scope.alert = "success";
      } else {
        $scope.alert = "danger";
      }
      $scope.response=response.data.result;

    });

  };


}]);
