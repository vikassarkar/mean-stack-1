define(['app'], function(app) {
    app.controller("FooterCtrl", function($scope, $location, $state) {
    	$scope.footerNavs = [{
    		"href":"ngcomp.home",
    		"title":"Home",
    		"location":"home"
    	},{
    		"href":"ngcomp.components",
    		"title":"Components",
    		"location":"components"
    	}]

        $scope.displayNavSeparator = function(index){
        	if(index < parseInt($scope.footerNavs.length-1)){
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