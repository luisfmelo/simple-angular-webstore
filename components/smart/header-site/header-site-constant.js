angular.module('onlineStore').constant('HEADER.CONFIG', {
    contactsLink: [{
        label: '+2 95 01 88 821',
        link: '#!/contacts',
        icon: 'fa-phone'
    }, {
        label: 'info@domain.com',
        link: '#!/contacts',
        icon: 'fa-envelope'
    }],

    quickLinks: [{
        label: 'Account',
        link: '#!/',
        icon: 'fa-user',
        isLoggedIn: true
    }, {
        label: 'Cart',
        link: '#!/cart',
        icon: 'fa-shopping-cart'
    }, {
        label: 'Login',
        link: '#!/login',
        icon: 'fa-lock',
        isLoggedIn: false
    }],
    
    
    
    
    menuLink: [{
        label: 'Home',
        link: '#!/'
    }, {
        label: 'Shop',
        link: '#!/#',
        subItems: [
            {
                label: 'Products',
                link: '#!/shop'
            }, {
                label: 'Product Details',
                link: '#!/product-details'
            }, {
                label: 'Checkout',
                link: '#!/checkout'
            }, {
                label: 'Cart',
                link: '#!/cart'
            }, {
                label: 'Login',
                link: '#!/login'
            } 
        ]
    }, {
        label: 'Blog',
        link: '#!/#',
        subItems: [
            {
                label: 'Blog List',
                link: '#!/blog'
            }, {
                label: 'Blog Single',
                link: '#!/blog-single'
            }
        ]
    }, {
        label: '404',
        link: '#!/404'
    }, {
        label: 'Contact',
        link: '#!/contacts'
    }]
});

