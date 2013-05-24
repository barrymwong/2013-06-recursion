// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  // You should use document.body, element.childNodes, and element.classList

  var arr = [],
      cn = document.body.childNodes,
      //cn = document.body.getElementsByTagName('*'),
      re = new RegExp(className,'i'),
      i, item;

/*
  for(i=0; i<cn.length; i++){
    if(re.test(cn[i].className) == true){
      arr.push(cn[i]);
      item = cn[i];
      arr[arr.length] = item;


    }
  }
*/


      [].forEach.call( cn, function(el) {
        if(re.test(el.className) == true){
         //console.log(el);
         arr[arr.length] = el;
        }
      });







  console.log(document.getElementsByClassName(className)); // is HTMLCollection??
  console.log(arr);
  console.log('-----------');
  return arr;

};
