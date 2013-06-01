// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  // You should use document.body, element.childNodes, and element.classList

  var result = [],
      //cn = document.body.childNodes,
      nodes = document.body.getElementsByTagName('*'),
      regex = new RegExp(className,'i'),
      i, item;


      var recursion = function(num){

        // base
        if(num === 0){
          return 1;
        }

        // recursion
        if(regex.test(nodes[num].className) === true){
          result.push(nodes[num]);
          item = nodes[num];
          result[result.length] = item;
          //console.log(result);
        }
        return recursion(num-1);
      }

      var recursionItems = recursion(nodes.length-1);
      console.log(result);
      //console.log(document.getElementsByClassName(className));
  return result;
};




