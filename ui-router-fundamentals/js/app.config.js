(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

   $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'houseList',
      })
      // put in one state for each page you need to visit
      .state({
        name:'new',
        url: '/houses/new',
        component: 'houseNew',
      })
      .state({
        name:'show',
        url:'/houses/{id}',
        component: 'houseShow',
      })
  }

}());
