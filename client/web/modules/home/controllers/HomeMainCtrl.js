define(['app', 'ajaxFactory'], function(app) {
    app.controller("HomeMainCtrl",
        function($scope, ajaxFactory) {

            $scope.contact;
            var refresh = function() {
                angular.element("input").val("");
                ajaxFactory.ajaxCall("GET", "/contactList", "").then(
                    function(response) {
                        $scope.contactListData = response;
                        console.log(response);
                    },
                    function(error) {
                        console.log(error);
                    }
                );
            }

            $scope.addContact = function() {
                console.log($scope.contact)
                ajaxFactory.ajaxCall("POST", "/contactList", $scope.contact).then(
                    function(response) {
                        console.log(response);
                        refresh()
                    },
                    function(error) {
                        console.log(error);
                    }
                );
            }

            $scope.removeContact = function(id) {
                 console.log(id);
                ajaxFactory.ajaxCall("DELETE", "/contactList/" + id, "").then(
                    function(response) {
                        alert("dssjdj")
                        console.log(response);
                        refresh();
                    },
                    function(error) {
                        console.log(error);
                    }
                );
            }
            $scope.editContact = function(data) {
                console.log(data);
                $scope.contact = data
            }
            $scope.updateContact = function(id) {
                //alert("id" + id);

                console.log($scope.contact._id);
                var editId = $scope.contact._id;
                ajaxFactory.ajaxCall("PUT", "/contactList/" + editId, $scope.contact).then(
                    function(response) {
                        console.log(response);
                        refresh();
                    },
                    function(error) {
                        console.log(error);
                    }
                );
            }
            $scope.clearEditable = function() {
                $scope.contact = {};
            }


            refresh();
        }
    );
});