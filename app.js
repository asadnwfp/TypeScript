console.log("Function Types");
function squareValue(a) {
    return a * a;
}
var squareOfTwo;
squareOfTwo = squareValue;
console.log(squareOfTwo(2));
// Adding Handle
console.log("Adding Handle");
function squareWithHandle(a, b, sq) {
    var result = a * a;
    sq(result, b);
}
console.log("CallBackFunc");
squareWithHandle(2, 4, function (a, b) {
    console.log(a + b);
});
