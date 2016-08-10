// lorenz code
function Lorenz() {
	var lorenzCanvas = document.getElementById('LorenzCanvas');
	this.ctx = lorenzCanvas.getContext("2d");
	this.canvasData = this.ctx.getImageData(0, 0, window.innerWidth, 500);
	this.s = 10;
	this.r = 24;
	this.b = 8 / 3;
	var step = 500; //500 is average step size more is smoother, but shorter length
	var zoom = 5; //5 works fine
	this.zzoom = .05; // .05 works fine
	var steps = 10000; // length of attractor
	var randTF = true; // if random init condition or 0,0,0
	this.ctx.lineWidth = '0';
	this.ctx.fillStyle = "#2b412b";
	if (randTF) {
		var point = {
			x: 2 * Math.random() * zoom - zoom
			, y: 2 * Math.random() * zoom - zoom
			, z: 2 * Math.random() / this.zzoom - 1 / this.zzoom
		};
	}
	else {
		var point = {
			x: 0
			, y: 0
			, z: 0
		};
	}
	var iterations = 0;
	setInterval(function () {
		if (iterations <= steps) {
			point = lorenzRepeater(point, zoom, step);
			iterations++;
		}
	}, 1000 / 1500);

	function adjustX(zoom, x, center) {
		return zoom * x + center;
	}

	function adjustY(zoom, y, center) {
		return zoom * y + center;
	}

	function drawPoint(zoom, x, y, z) {
		if (this.ctx.canvas.width > this.ctx.canvas.height) {
			x = adjustY(zoom, x, this.ctx.canvas.width / 2);
			y = adjustY(zoom, y, this.ctx.canvas.height / 2);
		}
		else {
			zoom = .5 * zoom;
			x = adjustX(zoom, x, this.ctx.canvas.width / 2);
			y = adjustX(zoom, y, this.ctx.canvas.height / 2);
		}
		this.ctx.fillRect(x, y, z * this.zzoom, z * this.zzoom);
	}

	function lorenzRepeater(point, zoom, step) {
		var x = point.x;
		var y = point.y;
		var z = point.z;
		var s = this.s;
		var r = this.r;
		var b = this.b;
		drawPoint(zoom, x, y, z);
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
// /lorenz code
// hashing code
function stringify(dec) {
	dec = Math.abs(dec);
	var s = toString(dec).replace('.', '');
	return s;
}

function decimalify(s) { // to decimal, s is a string array
	if (s.length <= 2) {
		return parseInt(s.join(''));
	}
	var leader = s.slice(0, 2).join('');
	var follower = s.slice(2, 0).join('');
	return parseFloat(leader + '.' + follower);
}

function toCoords(s) {
	var binaryVal = '';
	for (var i = 0; i < s.length; i++) {
		binaryVal += s[i].charCodeAt(0).toString(2);
	} // to binary
	s = parseInt(binaryVal, 2).toString(10).split(''); // to string array
	var sLen = Math.floor(s.length / 3);
	var e1 = s.slice(0, sLen);
	var e2 = s.slice(sLen, 2 * sLen);
	var e3 = s.slice(2 * sLen, 0);
	var coords = {
		x: decimalify(e1)
		, y: decimalify(e2)
		, z: decimalify(e3)
	}
	return coords
}

function lorenzify(point, key, step) {
	var x = point.x;
	var y = point.y;
	var z = point.z;
	var s = key.s;
	var r = key.r;
	var b = key.b;
	x = x + s * (y - x) / step;
	y = y + (x * (r - z) - y) / step;
	z = z + (x * y - b * z) / step;
	var newPoint = {
		x: x
		, y: y
		, z: z
	}
	return newPoint;
}

function lorenzHash(s1) {
	var point = toCoords(s1);
	var step = 500;
	var s = 10;
	var b = 8 / 3;
	if (s1.length % 3 == 0) {
		var r = 6;
	}
	else if (s1.length % 3 == 1) {
		var r = 6;
	}
	else {
		var r = 30;
	}
	var key = {
		s: s
		, r: r
		, b: b
	}
	for (var i = 0; i < 10000; i++) {
		point = lorenzify(point, key, step)
	}
	return fromCoords(point)
}
