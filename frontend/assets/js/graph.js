function Graph() {
	this._nodes = {};
	this._edges = [];
}

Graph.prototype.addNode = function(id, entity) {
	if (this._nodes[id] == null) {
		this._nodes[id] = entity;
	}

	console.log(this._nodes);
}

Graph.prototype.addEdge = function(eid1, eid2) {
	this._edges.push({n1: this._nodes[eid1], n2: this._nodes[eid2]});
};
