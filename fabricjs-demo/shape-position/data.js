var points = [
	{x: 0, y: 0},
	{x: 100, y: 100},
	{x: 50, y: 150},
	{x: 250, y: 150},
	{x: 200, y: 100},
	{x: 300, y: 0}
];

var polygon = new fabric.Polygon(points, {
	left: 150,
	top: 75,
	fill: 'red',
	hasControls: true,
	selectable: true
});

var sweaterDesigner = new SweaterDesigner();
var canvas = sweaterDesigner.getCanvas();
canvas.add(polygon);