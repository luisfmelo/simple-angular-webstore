angular.module('onlineStore').controller('HeaderSiteController', [
    '$filter',
    '$location',
    'HEADER.CONFIG',
    'UserService',
    function HeaderSiteController($filter, $location, CONFIG, user) {
        'use strict';

        this.onLinkIconClick =  function (iconClicked) {

        }
        

        this.isMenuLinkActive = function (url) {
            return url.replace('#!', '') === $location.url();
        }


        this.$onInit = function () {
            this.contactLinks = CONFIG.contactsLink;
            this.quickLinks = $filter('filter')(CONFIG.quickLinks, function(item){
                return item.isLoggedIn === undefined || item.isLoggedIn === user.isLoggedIn();
            });
            
            this.menuLinks = CONFIG.menuLink;
        }

    }
]);