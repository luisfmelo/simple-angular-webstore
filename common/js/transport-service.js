angular.module('onlineStore').service('TransportService', [
    '$http',
    function TransportService($http) {
        'use strict';


        this.getData = function (url) {
            return $http.get(url).then(function (response) {
                return response.data;
            });
        }
    }
]);