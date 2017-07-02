angular.module('onlineStore').controller('LinkIconController', [
    '$rootScope',
    '$location',
    function LinkIconController($rootScope, $location) {
        'use strict';

        var self = this;

        function updateActiveState() {
            self.isActive = self.viewModel.link.replace('#!', '') === $location.url();
        }

        this.$onInit = function () {
            updateActiveState();
        };

        $rootScope.$on('$locationChangeSuccess', updateActiveState);

    }
]);