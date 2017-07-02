angular.module('onlineStore').component('linkIcon', {
    bindings: {
        viewModel: '<',
        onClick: '<'
    },
    controller: 'LinkIconController',
    templateUrl: 'components/ui/link-icon/link-icon.html'
})