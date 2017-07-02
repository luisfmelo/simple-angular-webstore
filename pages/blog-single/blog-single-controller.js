angular.module('onlineStore').controller('BlogSingleController', [
    '$routeParams',
    '$location',
    'TransportService',
    function BlogSingleController($routeParams, $location, transportService) {
        'use strict';


        this.$onInit = function () {
            transportService.getData('api/blog-' + $routeParams.blogId +'.json').then((blogsData) => {
                this.blogsItem = blogsData.blog[0];
            }).catch((e) => {
                $location.url('/error');
            });
        }

    }
]);