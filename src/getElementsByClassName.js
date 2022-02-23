// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// I : className(string)
// O : HTML string elements has given class name (Array)
// C :
// E : no elements, a child element has a child
var getElementsByClassName = function(className
) {
  // get elements of body

  var nodes = document.body;
  var res = [];

  // find elements has className

  // while it has child, elements
  // if it matches with className
  // push it to res
  // to find classname, use classList function


  var test = function (nodes) {
    var nodeList = nodes.classList;
    if(nodeList && nodeList.contains(className)) {
      res.push(nodes);
      }
    if (nodes.hasChildNodes()){
      var children = nodes.childNodes;
      for (var i = 0; i < children.length; i++) {
        test(children[i]);
      }
    }
  };
  test(nodes);
  return res;
};
