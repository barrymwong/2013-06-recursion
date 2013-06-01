// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	if(obj === undefined) {
		return '';
	} if( typeof obj === 'number' || typeof obj === 'boolean' ){
		return obj.toString();
	} else if ( obj === null ) {
		return String(obj);
	} else if ( typeof obj === 'string' ) {
		return '"' + obj + '"';
	} else if(obj instanceof Object){

		if( Array.isArray(obj) ){ 
		// if this is an array...
			var arrToString = [];

			for(var i=0; i<obj.length; i++){
				arrToString.push(stringifyJSON(obj[i]));
			}
			arrToString = '[' + arrToString + ']';
			return arrToString;

		} else { 
		// else this is an object...
			var objToString = [],
				keyItem, val;

			for(var key in obj){
		 		keyItem = stringifyJSON(key);
		 		val = stringifyJSON(obj[key]);

		 		if(val != "") {
		 			objToString.push(keyItem + ':' + val);
		 		} else {
		 			return "{}";
		 		}
			}
			return '{' + objToString + '}';
		}
	}
};





