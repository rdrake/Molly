var Renderer = function(canvas) {
	var canvas = $(canvas).get(0)
	var ctx = canvas.getContext("2d");
	var particleSystem

	return {
		init: function(system) {
			particleSystem = system
			particleSystem.screenSize(canvas.width, canvas.height)
			particleSystem.screenPadding(80)
		},

		redraw:function() {
			ctx.fillStyle = "white"
			ctx.fillRect(0,0, canvas.width, canvas.height)

			particleSystem.eachEdge(function(edge, pt1, pt2) {
				ctx.strokeStyle = edge.data.color
				ctx.lineWidth = 1
				ctx.beginPath()
				ctx.moveTo(pt1.x, pt1.y)
				ctx.lineTo(pt2.x, pt2.y)
				ctx.stroke()
			})

			particleSystem.eachNode(function(node, pt) {
				var r = 4

				ctx.fillStyle = "#000"
				ctx.beginPath()
				ctx.arc(pt.x - r / 2, pt.y - r / 2, r, Math.PI * 2, 0, true)
				ctx.closePath()
				ctx.fill()
			})
		}
	}
}
