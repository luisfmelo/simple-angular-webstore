angular.module('onlineStore').controller('BlogPageController', [
    '$interval',
    'TransportService',
    function BlogPageController($interval, transportService) {
        'use strict';

        var intervalRequest;

        var getControllerData = () => {
            transportService.getData('api/blogs.json').then((blogsData) => {
                this.isReady = true;
                this.blogsList = blogsData.blogs;

                if (!intervalRequest) {
                    intervalRequest = $interval(getControllerData, 2000);
                }
            });
        }

        this.$onInit = function () {
            this.blogsList = [];
            this.isReady = false;
            
            getControllerData();
        };

        this.$onDestroy = function () {
            $interval.cancel(intervalRequest);
        }
    }
]);