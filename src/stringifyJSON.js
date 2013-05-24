// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {


	if( typeof obj === 'number' || typeof obj === 'boolean' ){
		obj = obj.toString();
	} else if ( obj === null ) {
		obj = String(obj);
	} else if ( typeof obj === 'string' ) {
		obj = '"' + obj + '"';
	} else if ( obj instanceof Array ) {
		obj = '[' + obj.join() + ']';
	} else if ( obj instanceof Object ) {
		obj = obj.join();
	}



/*
	// recursion
	var rec = function(arr) {
		console.log( 'before: ', arr );
		console.log( 'now: ', arr.pop() );
		if(arr.length) {
			rec(arr);
		} else {
			console.log('done.');
		}
	};
	rec(validObjects);
*/



	return obj;

};



