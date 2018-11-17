var func = function() {
	var value = 0;
	var promise1 = new Promise(function(resolve, reject) {
		setTimeout(function () { 
			value++;
			console.log("1: " + value);
			resolve();
		}, 2000);
	});
	var promise2 = new Promise(function(resolve, reject) {
		setTimeout(function () { 
			console.log("2: " + value);
			value++;
			resolve();
		}, 1000);
	});
	
	var p = Promise.all([promise1, promise2,]).then(function() {
		console.log("All finish: " + value);
	});
	
	console.log("finish: " + value);
	return value;
}

func();
