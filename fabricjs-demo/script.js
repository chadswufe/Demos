var canvas = this.__canvas = new fabric.Canvas("canvas", {selection: false});

var point1 = {x:10, y:10};
var point2 = {x:10, y:20};
var point3 = {x:20, y:20};
var point4 = {x:20, y:10};
var polygon = new fabric.Polygon([point1, point2, point3, point4], {
	stroke: 'black',
	strokeWidth: 5,
	fill: 'white',
	statefullCache: true
});
canvas.add(polygon);
