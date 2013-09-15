var width = 960, height = 500

/*var force = d3.layout.force()
  .charge(-120)
  .linkDistance(30)
  .size([width, height])

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

var findNode = function(id) {
  for (var i in force.nodes()) {
    if (force.nodes()[i]["name"] == id) {
      return force.nodes()[i]
    }
  }

  return null
}

var pushLink = function(link) {
  if ((findNode(link.source) != null) && (findNode(link.target) != null)) {
    force.links().push({
      "source": findNode(link.source),
      "target": findNode(link.target)
    })
  }
}*/

var source = "instructor|108", target = "instructor|109"
var nodes, links

//function expand(graph, 

d3.json("/span?e0=" + source + "&eL=" + target, function(error, graph) {
  var prev
  nodes = []
  links = []

  do {
    // First iteration will always be null, so grab the target to
    // start with.
    if (prev == null) {
      prev = target
    }

    console.log(prev)

    var entity = graph.entities[prev][0]
    var index = nodes.push({
      
    }) - 1
    
    if (index > 0) {
      links.push({"source": index, "target": (index - 1)})
    }

    prev = graph.prev[prev]
  } while (prev != null)

  for (var i in nodes) {
    console.log(nodes[i])
  }

  for (var i in links) {
    console.log(links[i])
  }

  /*
  var links = $.map(graph.prev, function(k, v) {
    if ((k == null) || (v == null)) return null;

    return {"source": k, "target": v}
  })

  var nodes = $.map(graph.entities, function(k, v) {
    return {"name": v}
  })

  force.nodes(nodes).start()

  links.forEach(pushLink)

  var link = svg.selectAll(".link").data(links)
    .enter().append("line")
      .attr("class", "link")

  var node = svg.selectAll(".node").data(nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 5)
      .attr("cx", function(d) { return 0 })
      .attr("cy", function(d) { return 0 })
      .style("fill", "purple")
      .call(force.drag)

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x })
      .attr("y1", function(d) { return d.source.y })
      .attr("x2", function(d) { return d.target.x })
      .attr("y2", function(d) { return d.target.y })

    node.attr("cx", function(d) { return d.x })
      .attr("cy", function(d) { return d.y })
  })*/
})
