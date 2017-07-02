angular.module('onlineStore').controller('ShopPageController', [
    '$http',
    '$interval',
    function ShopPageController($http, $interval) {
        'use strict';

        var self = this;
        var productsInterval;

        this.productsList = [];

        $http.get('/api/products.json').then(function (result) {
            self.productsList = result.data.products;
        });

        productsInterval = $interval(function (){

            $http.get('/api/products.json').then(function (result) {
                self.productsList = result.data.products;
            });

        }, 2000);

        this.$onDestroy = function () {
            $interval.cancel(productsInterval);
        };
    }
]);