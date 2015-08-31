define(['jquery',
        'ng-AMD',
        'mordenizer',
        'ng-aria',
        'ui-router',
        'ng-animate',
        'ui-bootstrap',
        'jquery-validate'
    ],
    function($, angularAMD) {
        var app = angular.module("ng-components", ['ui.router']);
        /*
         **Configure Angular ngApp with route and cache the needed providers
         */
        app.config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/home");
                $stateProvider
                .state('ngcomp',
                    angularAMD.route({
                        url: "",
                        abstract: true, //for disablebling use of this state any where else
                        views: {
                            "header": angularAMD.route({
                                templateUrl: "web/common/partials/header.html",
                                controller: 'HeaderCtrl',
                            }),
                            "footer": angularAMD.route({
                                templateUrl: "web/common/partials/footer.html",
                                controller: 'FooterCtrl',
                            }),
                            "module": ""
                        },
                    })
                )
                .state('ngcomp.home',
                    angularAMD.route({
                        url: "/home",
                        views: {
                            "module@": angularAMD.route({
                                templateUrl: "web/modules/home/partials/home.html",
                                controller: 'HomeMainCtrl',
                            })
                        },
                    })
                )
                .state('ngcomp.components',
                    angularAMD.route({
                        url: "/components",
                        views: {
                            "module@": angularAMD.route({
                                templateUrl: "web/modules/components/partials/components.html",
                                controller: 'ComponentMainCtrl'
                            }),
                            "tabs@ngcomp.components": angularAMD.route({
                                templateUrl: "web/modules/components/partials/tab.html",
                                controller: 'TabCtrl',
                            })
                        }
                    })
                )
                .state('ngcomp.login',
                    angularAMD.route({
                        url: "/login",
                        views: {
                            "module@": angularAMD.route({
                                templateUrl: "web/modules/auth/login/partials/login.html",
                                controller: 'LoginMainCtrl',
                            })
                        },
                    })
                )
                .state('ngcomp.signup',
                    angularAMD.route({
                        url: "/signup",
                        views: {
                            "module@": angularAMD.route({
                                templateUrl: "web/modules/auth/signup/partials/signup.html",
                                controller: 'SignupMainCtrl',
                            })
                        },
                    })
                );
            }
        ]);

        /*
         ** Define constant to be used by Google Analytics
         */
        app.constant("SiteName", "/angularAMD");

        /*
         ** Bootstrap Angular when DOM is ready
         */
        return angularAMD.bootstrap(app);
    }
);




//app.value('name', value)

/*
 **Lazy loading of controllers for multiple views if controller is not loading
 */
/*var loadController = function(controllerName) {
    return ["$q", function($q) {
        var deferred = $q.defer();
        alert(controllerName+" loading.............")
        require([controllerName], function() {
            deferred.resolve(); 
        });
        return deferred.promise;
    }];
}*/

/*.state("home",
    angularAMD.route({
        url: '/home',
        templateUrl: 'web/modules/home/partials/home.html',
        controller: 'HeaderCtrl',
        navTab: "home"
    })
)
.state("ui-bootstrap",
    angularAMD.route({
        url: '/ui-bootstrap',
        templateUrl: 'web/modules/ui-bootstrap/partials/ui-bootstrap.html',
        controller: 'FooterCtrl',
        navTab: "ui-bootstrap"
    })
)
.state("ui-sandbox",
    angularAMD.route({
        url: '/ui-sandbox',
        templateUrl: 'web/modules/ui-sandbox/partials/ui-sandbox.html',
        controller: 'FooterCtrl',
        navTab: "ui-sandbox"
    })
)*/