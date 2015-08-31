var vendorsBaseUrl              = 'web/vendors/';
var commonBaseUrl               = 'web/common/';
var moduleBaseUrl               = 'web/modules/';
require.config({
    baseUrl                     : '',
    waitSeconds: 20,
    paths: {
        /*
        **vender libraries
        */
        'jquery'                : vendorsBaseUrl+'jquery-1.10.2/jquery_min',
        'bootstrap'             : vendorsBaseUrl+'bootstrap-3.3.4/js/bootstrap_min',
        'd3'                    : vendorsBaseUrl+'d3-3.4.1/d3',
        'owl-carousel'          : vendorsBaseUrl+'owl-carousel-1.3.3/js/owl.carousel.min',
        'mordenizer'            : vendorsBaseUrl+'modernizr-2.6.2/modernizr-2.6.2.min',
        'jquery-validate'       : vendorsBaseUrl+'jquery-validate/jquery.validate',
        
        /*
        **Angular libraries
        */
        'ng'                    : vendorsBaseUrl+'angular-1.2.28/angular.min',
        'ng-AMD'                : vendorsBaseUrl+'angular-1.2.28/angularAMD',
        'ng-animate'            : vendorsBaseUrl+'angular-1.2.28/angular-animate.min',
        'ng-sanitize'           : vendorsBaseUrl+'angular-1.2.28/angular-sanitize.min',
        'ng-aria'               : vendorsBaseUrl+'angular-1.2.28/ng-aria',
        'ui-router'             : vendorsBaseUrl+'angular-1.2.28/angular-ui-router.min',
        'ui-bootstrap'          : vendorsBaseUrl+'angular-1.2.28/ui-bootstrap-0.13.0.min',

        /*
        **Module Ctrls
        */
        'HomeMainCtrl'          : moduleBaseUrl+'home/controllers/HomeMainCtrl',
        'ComponentMainCtrl'     : moduleBaseUrl+'components/controllers/ComponentMainCtrl',
        'TabCtrl'               : moduleBaseUrl+'components/controllers/TabCtrl',
        'LoginMainCtrl'         : moduleBaseUrl+'auth/login/controllers/LoginMainCtrl',
        'SignupMainCtrl'        : moduleBaseUrl+'auth/signup/controllers/SignupMainCtrl',

        /*
        **Module services
        */
        'ajaxFactory'           : commonBaseUrl+'scripts/services/ajaxFactory',

        /*
        **common js
        */
        'FooterCtrl'            : commonBaseUrl+'scripts/controllers/FooterCtrl',
        'HeaderCtrl'            : commonBaseUrl+'scripts/controllers/HeaderCtrl',
        'app'                   : 'web/modules/app',
    },

    shim: {
        'ng'                    : ['jquery'],
        'jquery-validate'       : ['jquery'],
        'customRules'           : ['jquery-validate'],
        'ng-AMD'                : ['ng'],
        'ng-animate'            : ['ng'],
        'ng-sanitize'           : ['ng'],
        'ng-aria'               : ['ng'],
        'ui-bootstrap'          : ['ng'],
        'ui-router'             : ['ng'],
    },

    /*
    **kick start application
    */
    deps: ['app']       
});
