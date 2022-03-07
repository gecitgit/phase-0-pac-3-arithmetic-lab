//total of 8 functions by the end
function add(a, b){ //add two numbers together and return sum
    return a + b;
}

function subtract(a, b){ //subtract b from a and return the answer
    return a - b;
}

function multiply(a, b){ //multiply a*b and return result
    return a * b;
}

function divide(a, b){ //divide a by b and return result
    return a / b;
}

function increment(a){ //add 1 to a and set to a
    return a+=1;
}

function decrement(a){ //subtract 1 from a and set to a
    return a-=1;
}

function makeInt(string){
    return parseInt(string, 10);
}

function preserveDecimal(string){
    return parseFloat(string);
}