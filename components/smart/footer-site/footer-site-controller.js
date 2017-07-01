angular.module('onlineStore').controller('FooterSiteController', [
    'FOOTER.CONFIG',
    function FooterSiteController(CONFIG) {
        'use strict';

        this.$onInit = function() {
            this.linkList = CONFIG.LINKS;
        };
    }
]);