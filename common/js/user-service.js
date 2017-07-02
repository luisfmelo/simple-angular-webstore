angular.module('onlineStore').service('UserService', [
    function UserService() {
        'use strict';


        this.setLoggedIn = function () {
            console.log('logged user');
        }

        this.isLoggedIn = function () {
            return false;
        }
    }
]);