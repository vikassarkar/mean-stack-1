define(['app', 'ajaxFactory'], function(app) {
    app.controller("ComponentMainCtrl", function($scope, ajaxFactory) {

        $scope.component;
        var refresh = function() {
            angular.element("input").val("");
            ajaxFactory.ajaxCall("GET", "/component", "").then(
                function(response) {
                    $scope.componentListData = response;
                    console.log(response);
                },
                function(error) {
                    console.log(error);
                }
            );
        }
        $scope.addComponent = function() {
            ajaxFactory.ajaxCall("POST", "/component", $scope.component).then(
                function(response) {
                    console.log(response);
                    refresh()
                },
                function(error) {
                    console.log(error);
                }
            );
        }

        $scope.removeComponent = function(id) {
            ajaxFactory.ajaxCall("DELETE", "/component/" + id, "").then(
                function(response) {
                    console.log(response);
                    refresh();
                },
                function(error) {
                    console.log(error);
                }
            );
        }
        refresh();
    });
});