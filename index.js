function receivesAFunction (result) {
    console.log(result);
}

function add(num1, num2, mycallback){
let sum = num1 + num2;
mycallback(sum)
}

add(10, 20, receivesAFunction)

function returnsANamedFunction (name) {
}

let returnsAnAnonymousFunction = function () {
}