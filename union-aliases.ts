
type Combinable = number | string


function combine(input1: Combinable, input2: number|string){
    let result;
    if(typeof input1 ==='number' && typeof input2 ==='number'){
        result = input1 + input2;
    }else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

    const combineAge = combine(2,3);
    console.log('CombineAge: ' + combineAge);

    const combineName = combine('Saad',' Ahmed');
    console.log('CombineName: ' + combineName);
