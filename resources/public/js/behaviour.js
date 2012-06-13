var form = $("#spanning"),
	e0 = $("#e0"),
	eL = $("#eL"),
	cont = true,
	spinner = $(".loader");

var template = " \
{{#.}} \
	{{#name}}<h1>{{name}}</h1>{{/name}} \
	{{#title}}<h1>{{title}}</h1>{{/title}} \
	<p>{{class}}</p>{{/.}}</h1> \
";

function lol(that) {
	console.log(that);
}

function process(target, path, keyword) {
	$.getJSON(path, {q: keyword}, function(data) {
		$.each(data.result, function(i, v) {
			var li = $("<li/>", {
				class: "entity"
			});

			if (v.meta.type == "value") {
				li.html("<h3>" + v.results.value + "</h3>");

				li.on("click", function() {
					process(target, "/entities", v.results.value);
					li.remove();
				});
			} else if (v.meta.type == "entity") {
				li.html(v.meta.class);
			}

			target.append(li);
		});
	});
}

$("#entity-search").submit(function() {
	var keyword = $("#entity-keyword").val(),
		list = $("#entity-list");

	if (keyword != "") {
		list.empty();
		process(list, "/value", keyword);
		/*$.getJSON("/value", {q: keyword}, function(data) {
			$.each(data.result, function(i, v) {
				if (v.meta.type == "value") {
					var li = $("<li/>", {
						class: "entity",
						html: "<h3>" + v.results.value + "</h3>"
					});

					li.on("click", function() {
						li.remove();
					});

					list.append(li);
				} else {
					//
				}
			});
		});*/
	}

	return false;
});

$("#first-entity").click(function(e) {
	console.log("wat");
});

function performSearch(e0, eL) {
	spinner.show();

	$.getJSON("/span",
		{e0: e0, eL: eL},
		function(data) {
			spinner.hide();

			var results = [];

			for (e in eL) {
				var result = [],
					next = eL[e];

				do {
					result.push(next);
					next = data.prev[next];
				} while (next != e0);

				result.push(next);
				results.push(result);
			}

			//
			for (result in results) {
				$("<p/>").append(results[result].join(" &rarr; ")).appendTo("#results");
			}

			$("#results").append("Took " + data.time + "ms");
		}
	);
}

var source = "{{this.meta}}";
//var source = $("instructors-template").html();
var T = Handlebars.compile(source);

form.submit(function(e) {
	$.getJSON("/suggest", {q: e0.val()}, function(data) {
		console.log(data.result);
		console.log(T(data.result[0]));
	});
/*	if (e0.val() == "") {
		e0.parent().parent().addClass("error");
		cont = false;
	} else {
		e0.parent().parent().removeClass("error");
		cont = true;
	}
	
	if (eL.val() == "") {
		eL.parent().parent().addClass("error");
		cont = false;
	} else {
		eL.parent().parent().removeClass("error");
		cont = true;
	}

	//
	if (cont) {
		$("#results").empty();

		performSearch(e0.val(), eL.val().split(","));
	}
*/
	return false;
});
