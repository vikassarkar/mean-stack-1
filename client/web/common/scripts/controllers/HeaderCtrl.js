define(['app'], function(app) {
    app.controller("HeaderCtrl", function($scope, $location) {
       $scope.headerNavs = [{
    		"href":"ngcomp.home",
    		"title":"Home",
    		"location":"home"
    	},{
    		"href":"ngcomp.components",
    		"title":"Components",
    		"location":"components"
    	},{
    		"href":"ngcomp.login",
    		"title":"Login",
    		"location":"login"
    	},{
    		"href":"ngcomp.signup",
    		"title":"Signup",
    		"location":"signup"
    	}]

        $scope.displayNavSeparator = function(index){
        	if(index < parseInt($scope.headerNavs.length-1)){
        		return true;
        	}else{
        		return false;
        	}
        }

        $scope.activeMenuHandler = function(location){
        	return location === $location.path();
        }
    });
});