function Lorenz(ctx, s, r, b, step, zoom, steps, randTF) {
	ctx.fillStyle = "#000";
	if (randTF) {
		var point = {
			x: 2 * Math.random() * zoom - zoom
			, y: 2 * Math.random() * zoom - zoom
			, z: 2 * Math.random() * zoom - zoom
		};
	}
	else {
		var point = {
			x: 0
			, y: 0
			, z: 0
		};
	}
	for (var i; i < steps; i++) {
		point = lorenzRepeater(ctx, point, s, r, b, zoom, step);
	}

	function adjustX(zoom, x) {
		return zoom * x + window.innerWidth / 2;
	}

	function adjustY(zoom, y) {
		return zoom * y + 500 / 2;
	}

	function drawPoint(ctx, zoom, x, y) {
		x = adjustX(zoom, x);
		y = adjustY(zoom, y);
		ctx.fillRect(x, y, 1, 1);
	}

	function lorenzRepeater(ctx, point, s, r, b, zoom, step) {
		var x = point.x;
		var y = point.y;
		var z = point.z;
		drawPoint(ctx, zoom, x, y);
		var deltaX = s * (y - x) / step;
		var deltaY = (x * (r - z) - y) / step;
		var deltaZ = (x * y - b * z) / step;
		x += deltaX;
		y += deltaY;
		z += deltaZ;
		var newPoint = {
			x: x
			, y: y
			, z: z
		};
		return newPoint;
	}
}
