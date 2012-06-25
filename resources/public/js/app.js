var SearchModel = {
	q1: ko.observable(""),
	q2: ko.observable(""),
	q1list: ko.observableArray(),
	q2list: ko.observableArray(),
	from: ko.observable(),
	to: ko.observable()
}

function didYouMean(query, prop, sel) {
	$.getJSON("/value", {q: query}, function(data) {
		if (data.result.length > 0) {
			var result = data.result[0].results.value;
			var a = $("<a></a>", {text: result});

			a.click(function() {
				prop(result);
			});

			sel.empty().append(a[0]);
		}
	});
}

function populateEntityList(query, prop) {
	$.getJSON("/entities", {q: query}, function(data) {
		prop($.map(data.result, function(v, i) { return v; }));
	});
}

function createTable(id, obj, prop) {
	var tbl = $("<table></table>", {class: "result-table"});
	var keys = Object.keys(obj);

	tbl.append("<tr><td class='result-table-key'>ID</td>" +
		"<td class='result-table-value'>" + id + "</td></tr>");

	for (key in keys) {
		tbl.append("<tr><td>" + keys[key] + "</td><td>" +
			obj[keys[key]] + "</td></tr>");
	}

	tbl.click(function() {
		prop(id);
	});

	return tbl;
}

function drawListBox(values, sel, prop) {
	sel.empty();

	$.each(values, function(idx, val) {
		sel.append(createTable(val.meta.id, val.results, prop)[0]);
	});
}

$("#do-search").click(function() {
	if ((SearchModel.from() != undefined) &&
		(SearchModel.to() != undefined)) {
		console.log("WHOO");
	}
});

SearchModel.q1.subscribe(function(q1) {
	didYouMean(q1, SearchModel.q1, $("#q1-dym"));
	populateEntityList(q1, SearchModel.q1list);
});

SearchModel.q2.subscribe(function(q2) {
	didYouMean(q2, SearchModel.q2, $("#q2-dym"));
	populateEntityList(q2, SearchModel.q2list);
});

SearchModel.q1list.subscribe(function(list) {
	drawListBox(list, $("#q1-list"), SearchModel.from);
});

SearchModel.q2list.subscribe(function(list) {
	drawListBox(list, $("#q2-list"), SearchModel.to);
});

ko.applyBindings(SearchModel);
