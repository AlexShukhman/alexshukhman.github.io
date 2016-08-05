function Lorenz() {
	var lorenzCanvas = document.getElementById('LorenzCanvas');
	this.ctx = lorenzCanvas.getContext("2d");
	this.canvasData = this.ctx.getImageData(0, 0, window.innerWidth, 500);
	this.s = 10;
	this.r = 24;
	this.b = 8 / 3;
	var step = 500; //500 is average step size more is smoother, but shorter length
	var zoom = 5; //5 works fine
	var steps = 10000; // length of attractor
	var randTF = true; // if random init condition or 0,0,0
	console.log('starting Lorenz');
	this.ctx.lineWidth = '1';
	this.ctx.strokeStyle = "blue";
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
	console.log('starting for loop, steps = ' + steps);
	var iterations = 0;
	setInterval(function () {
		if (iterations <= steps) {
			point = lorenzRepeater(point, zoom, step);
			iterations++;
		}
	}, 1000 / 1500);

	function adjustX(zoom, x) {
		return zoom * x + (this.ctx.canvas.width / 2);
	}

	function adjustY(zoom, y) {
		return zoom * y + this.ctx.canvas.height / 2;
	}

	function drawPoint(zoom, x, y) {
		x = adjustX(zoom, x);
		y = adjustY(zoom, y);
		this.ctx.fillRect(x, y, 1, 1);
	}

	function lorenzRepeater(point, zoom, step) {
		var x = point.x;
		var y = point.y;
		var z = point.z;
		var s = this.s;
		var r = this.r;
		var b = this.b;
		drawPoint(zoom, x, y);
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
