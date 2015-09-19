var Q = require('q');


var upperCase = function(request, reply) {
	// Originally they were using encodeURIComponent, but that
	// doesn't do anything if the name param comes in encoded
	// like with: foo%20bar
	name = decodeURIComponent(request.params.name);
	//name = addOnePyramid(name);

	promName = addOnePromise(name)
	.then( function(finalName) {
		console.log('final result', finalName);
		reply('Hello, ' + finalName + '!');			
	})
	.done();
};


// Example pyramid of doom
var addOnePyramid = function(raw) {
	var foo;
	step1(raw, function (raw1) {
		step2(raw1, function (raw2) {
			step3(raw2, function (raw3) {
				foo = raw3;
			});
		});
	});
	return foo;
};

var step1 = function(raw, testFunc) {
	console.log('step1', raw);
	testFunc(raw + '1');
};
var step2 = function(raw, testFunc) {
	console.log('step2', raw);
	testFunc(raw + '2');
};
var step3 = function(raw, testFunc) {
	console.log('step3', raw);
	testFunc(raw + '3');
};

// Example of pyramid but done with Q Promise
var addOnePromise = function(raw) {
	var step1Result;
	var step2Result;

	console.log('calling promise');
	return stepProm('1', raw)
	.then(function(step1Result) {
		return stepProm('2', step1Result)
	})
	.then(function(step2Result) {
		return stepProm('3', step2Result)
	});
};

var stepProm = function(id, raw) {
	return Q.fcall(function() {
		console.log('step', id, raw);
		return raw + id;
	});
};


module.exports.upperCase = upperCase;
