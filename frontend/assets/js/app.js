$("#search").submit(function(e) {
	e.preventDefault();
	return false;
});

$("#search-box").autocomplete({
	minLength: 2,
	source: function(req, res) {
		$.getJSON("suggest/", { q: req.term }, function(data) {
			res(data.suggestions)
		});
	}
});
