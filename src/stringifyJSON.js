// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // I : string, object, Array, null, boolean, null
  // O : result String or Array
  // E : an array has array elements obj = [[1],2,[3,4]], an array has object elements obj = [{ 1 : 2},3], an array has both.

  if (obj === null) {
    return 'null';
  }

  // number & boolean
  if (['number', 'boolean'].includes(typeof obj)) {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // check for array
  if (Array.isArray(obj)) {
    // check the array is empty or the length is zero.
    var res = '';
    res += '[';
    res += obj.map(function(element) {
      return stringifyJSON(element);
    }).join(',');
    res += ']';
    return res;
  }

  else if (obj && typeof obj === 'object') {
    var res = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      res.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + res.join(',') + '}';
  }


};
