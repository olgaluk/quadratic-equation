module.exports = function solveEquation(equation) {
  // your implementation
  var firstString = equation;
  var arrayString = firstString.split(" ");
  var a = +arrayString[0];
  if (arrayString[3] === '+') {
    var b = +arrayString[4];
  } else {
    b = -(+arrayString[4]);
  };
  if (arrayString[7] === '+') {
    var c = +arrayString[8];
  } else {
    c = -(+arrayString[8]);
  };
  var x1 = Math.round(-b + Math.sqrt(b*b - 4*a*c))/(2*a);
  var x2 = Math.round(-b - Math.sqrt(b*b - 4*a*c))/(2*a);
  var arrFinish = [x1, x2];
  arrFinish.sort((a,b) => a -b);
  return arrFinish;
}
