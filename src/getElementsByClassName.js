// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  // You should use document.body, element.childNodes, and element.classList

  var result = [],
      body = document.body,
      nodes = body.getElementsByTagName('*'),
      regex = new RegExp(className,'i');

      var recursion = function(num){

        // base
        if(num === 0){
          return 1;
        }

        // recursion
        if(regex.test(nodes[num].classList) === true){
          result.push(nodes[num]);
        }
        recursion(num - 1);
      }

      recursion(nodes.length-1);

      //console.log([].slice.call( document.getElementsByClassName("targetClassName") ));
      //console.log(result);
      //console.log( '--------------' );

  // spec passes in firefox, but not in chrome...why???
  return result;
};


