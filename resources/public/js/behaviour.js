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

var selected;

function process(target, path, keyword) {
	$.getJSON(path, {q: keyword}, function(data) {
		$.each(data.result, function(i, v) {
			if (v.meta.type == "value") {
				process(target, "/entities", v.results.value);
			} else {
				var li = $("<li/>", {
					class: "entity",
					html: v.meta.id
				}).on("click", function() {
					selected = v;
				});

				target.append(li);
			}
		});
	});
}

$("#entity-search").submit(function() {
	var keyword = $("#entity-keyword").val(),
		list = $("#entity-list");

	if (keyword != "") {
		list.empty();
		process(list, "/value", keyword);
	}

	return false;
});
