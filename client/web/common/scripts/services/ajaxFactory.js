define(['app'], function(app) {
	app.factory("ajaxFactory", ["$http", "$q",
		function($http, $q) {

			var ajaxCall = function(method, url, data) {
				var deferred = $q.defer();
				$http({
					method: method,
					data: data,
					url: url,
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data) {
					deferred.reject(data);
				});
				return deferred.promise;
			}
			return { 
				ajaxCall : ajaxCall 
			}

		}
	]);
});
