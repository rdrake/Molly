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
					var html;

					context.id = val.meta.id;
					
					if (val.meta.class == "instructors") {
						context.name = context.name.toUpperCase();
						html = instructors(context);
					} else if (val.meta.class == "courses") {
						context.code = context.code.toUpperCase();
						html = courses(context);
					}

					results.append(html);
				});
			});
		}
	}

	$scope.updateQuery = function(value) {
		$scope.query = value;
		$scope.findValues();
	}
}

// Keyboard bindings
KeyboardJS.bind.key('slash', function() {}, function() {
	$("#search-box").focus();
});

function link(eid) {
	var wl = window.location;

	if (wl.search == "") {
		window.location = wl.pathname + "?from=" + eid;
	} else {
		window.location = "/results.html" + wl.search + "&to=" + eid;
	}
}

function findPath(from, to) {
	$.get("/span", {e0: from, eL: to}, function(data) {
		var results = $("#results");
		results.empty();

		var e = to;
		var eids = [];

		while ((e != null) && (e != from)) {
			eids.push(e);
			e = data.prev[e];
		}

		eids.push(from);
		eids = eids.reverse();

		_.each(eids, function(val, idx) {
			var entity = data.entities[val][0];
			var context = entity.results;
			var html;

			context.id = entity.meta.id;
				
			if (entity.meta.class == "instructors") {
				context.name = context.name.toUpperCase();
				html = instructors(context);
			} else if (entity.meta.class == "courses") {
				context.code = context.code.toUpperCase();
				html = courses(context);
			} else {
				html = "<div class='entity'>" + context.id + "</div>";
			}

			results.append(html);
		});
	});
}
