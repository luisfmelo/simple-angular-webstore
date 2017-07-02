angular.module('onlineStore').config([
    '$routeProvider',
    '$locationProvider',
    function routeConfig($routeProvider, $locationProvider) {
        'use strict';

        $routeProvider
        .when('/', {
            template: '<index-page></index-page>'
        })
        .when('/contacts', {
            template: '<contacts-page></contacts-page>'
        })
        .when('/error', {
            template: '<error-page></error-page>'
        })
        .when('/blog', {
            template: '<blog-page></blog-page>'
        })
        .when('/blog-single', {
            template: '<blog-single-page></blog-single-page>'
        })
        .when('/cart', {
            template: '<cart-page></cart-page>'
        })
        .when('/checkout', {
            template: '<checkout-page></checkout-page>'
        })
        .when('/login', {
            template: '<login-page></login-page>'
        })
        .when('/product-details', {
            template: '<product-details-page></product-details-page>'
        })
        .when('/shop', {
            template: '<shop-page></shop-page>'
        })
        .otherwise({
            redirectTo: '/error'
        });

        $locationProvider.html5Mode(false);
    }
]);