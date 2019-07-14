var SweaterDesigner = function() {
	fabric.Object.prototype.originX = 'center';
	fabric.Object.prototype.originY = 'center';
	fabric.Object.prototype.perPixelTargetFind = true;
	fabric.Object.prototype.hasControls = false;
	fabric.Object.prototype.hasBorders = false;
	fabric.Canvas.prototype.registerControls = function(e) {
		var canvas = this;
		var polygon = e.target;
		leftControl.oninput = function() {
			polygon.set('left',parseInt(this.value, 10));
			leftValue.value = parseInt(this.value, 10);
			canvas.requestRenderAll();
		};
		topControl.oninput = function() {
			polygon.set('top',parseInt(this.value, 10));
			topValue.value = parseInt(this.value, 10);
			canvas.requestRenderAll();
		};
		angleControl.oninput = function() {
			polygon.set('angle',parseInt(this.value, 10));
			angleValue.value = parseInt(this.value, 10);
			canvas.requestRenderAll();
		};
		scaleControl.oninput = function() {
			polygon.scale(parseFloat(this.value));
			scaleValue.value = parseFloat(this.value);
			canvas.requestRenderAll();
		};
		leftValue.oninput = function() {
			polygon.set('left',parseInt(this.value, 10));
			leftControl.value = parseInt(this.value, 10);
			canvas.requestRenderAll();
		};
		topValue.oninput = function() {
			polygon.set('top',parseInt(this.value, 10));
			topControl.value = parseInt(this.value, 10);
			canvas.requestRenderAll();
		};
		angleValue.oninput = function() {
			polygon.set('angle',parseInt(this.value, 10));
			angleControl.value = parseInt(this.value, 10);
			canvas.requestRenderAll();
		};
		scaleValue.oninput = function() {
			polygon.scale(parseFloat(this.value));
			scaleControl.value = parseFloat(this.value);
			canvas.requestRenderAll();
		};
		canvas.updateControls(e);
		toggleControls(false);
	}
	fabric.Canvas.prototype.updateControls = function(e) {
		var canvas = this;
		var polygon = e.target;
		leftControl.value = leftValue.value = parseInt(polygon.left);
		topControl.value = topValue.value = parseInt(polygon.top);
		angleControl.value = angleValue.value = parseInt(polygon.angle);
		scaleControl.value = scaleValue.value = parseFloat(polygon.scaleX).toFixed(1);
	}
	fabric.Canvas.prototype.clearControls = function(e) {
		leftControl.value = leftValue.value = '';
		topControl.value = topValue.value = '';
		angleControl.value = angleValue.value = '';
		scaleControl.value = scaleValue.value = '';
		toggleControls(true);
	}
	
	var leftControl = document.getElementById('left-control');
	var topControl = document.getElementById('top-control');
	var angleControl = document.getElementById('angle-control');
	var scaleControl = document.getElementById('scale-control');
	var leftValue = document.getElementById('left');
	var topValue = document.getElementById('top');
	var angleValue = document.getElementById('angle');
	var scaleValue = document.getElementById('scale');
	
	function toggleControls(isDisabled) {
		leftControl.disabled = isDisabled;
		topControl.disabled = isDisabled;
		angleControl.disabled = isDisabled;
		scaleControl.disabled = isDisabled;
		leftValue.disabled = isDisabled;
		topValue.disabled = isDisabled;
		angleValue.disabled = isDisabled;
		scaleValue.disabled = isDisabled;
	}
	
	var canvas = this.__canvas = new fabric.Canvas('canvas', {selection: false});
	canvas.on({
		'object:moving': canvas.updateControls,
		'object:scaling': canvas.updateControls,
		'object:resizing': canvas.updateControls,
		'object:rotating': canvas.updateControls,
		'object:skewing': canvas.updateControls,
		'selection:created': canvas.registerControls,
		'selection:updated': canvas.registerControls,
		'selection:cleared': canvas.clearControls
	});
	
	return {
		"getCanvas": function() {return canvas;}
	}
}


