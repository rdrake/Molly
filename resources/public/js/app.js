// Compile the templates only once.
var instructors = Handlebars.compile($("#instructors-template").html());
var courses = Handlebars.compile($("#courses-template").html());

function MollyCtrl($scope, $http) {
	$scope.entities = [];

	$scope.findValues = function() {
		if ($scope.query == "") {
			$scope.values = [];
		} else {
			// Populate suggestions
			$http({
				method: "GET",
				url: "/value",
				params: {q: $scope.query}
			}).success(function(data) {
				$scope.values = _.map(data.result, function(value) {
					return value.results.value;
				});
			});

			// Populate entity results
			$http({
				method: "GET",
				url: "/entities",
				params: {q: $scope.query}
			}).success(function(data) {
				$scope.entities = data.result;

				var results = $("#results");
				results.empty();

				_.each(data.result, function(val, idx) {
					var context = val.results;

					if (val.meta.class == "instructors") {
						results.append(instructors(context));
					} else if (val.meta.class == "courses") {
						context.code = context.code.toUpperCase();
						context.id = val.meta.id;
						results.append(courses(context));
					}
				});
			});
		}
	}

	$scope.updateQuery = function(value) {
		$scope.query = value;
		$scope.findValues();
	}
}
