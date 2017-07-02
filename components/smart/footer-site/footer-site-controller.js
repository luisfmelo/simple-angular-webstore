angular.module('onlineStore').controller('FooterSiteController', [
    'FOOTER.CONFIG',
    function FooterSiteController(config) {
        'use strict';

        this.$onInit = function () {
            this.linkList = config.links;
        };

    }
]);