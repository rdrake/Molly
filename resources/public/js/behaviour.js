var form = $("#spanning"),
	e0 = $("#e0"),
	eL = $("#eL"),
	cont = true,
	spinner = $(".loader");

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

			for (e in data.reached) {
				performSearch(data.reached(e));
			}
		}
	);
}

form.submit(function(e) {
	if (e0.val() == "") {
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

	return false;
});
