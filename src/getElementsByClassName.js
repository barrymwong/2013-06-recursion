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
      nodes = body.childNodes;

      // check each node and it's contents as well
      var recursion = function(nod){
        for(var i=0; i<nod.length; i++){
          if( nod[i].nodeType === 1 && nod[i].classList.contains(className) ) {
            result.push(nod[i])
          }

          if(nod[i].innerHTML){
            recursion(nod[i].childNodes);
          }
        }
      }
      recursion(nodes);

  return result;
};


