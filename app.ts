console.log("Function Types")

function squareValue(a:number){
    return a*a;
}
let squareOfTwo: (a:number)=>number;

squareOfTwo = squareValue;
console.log(squareOfTwo(2));


// Adding Handle

console.log("Adding Handle");

function squareWithHandle(a:number,b:number, sq:(num:number,num2:number)=>void){
    const result = a*a;

    sq(result,b);
}


console.log("CallBackFunc");
squareWithHandle(2,4,(a,b)=>{

    console.log(a+b);
});