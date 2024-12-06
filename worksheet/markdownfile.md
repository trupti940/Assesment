1 question:
function calculateArea(length,width){
    if (typeof length !== "number" || typeof width !== "number"){
        return "error: length and width must be number.";
    }
    return length * width;
}
console.log(calculateArea(10,"5"))


compare and contrast behaviour of dyanmic typing with coercion mechanism .

Dynamic Typing: 
In Dynamic Typing variables can hold values of any type, and their types can change during runtime.

A variable can start as number and later it hold a string.

Having ability to assign any type of value to a variable.

It controlled by the programmer.

Also, assigning and reassigning different types to variables.

example:
 let a = 15;
 console.log(typeof a);

 let a = false;
 console.log(typeof a);


Type Coercion:
It Automatically converts one data type to another in operations, like when adding a string and a number.

A number can be converted to a string or vice versa, depending on the operation.

It happens automatically by Javascript.

Also it happens during operations or comparisons.

It combining or comparing values of different types.

Example:

let ans = "10" - 5 ;
console.log(ans);

let sum = "world" + 1 ;
console.log(sum);



function calculateSum(arr){
    let sum = 0;
    for (let i of arr){
        const num = Number(i);
        if (!isNaN(num)){
            sum += num;
        }
    }
    return sum;
}

const input = ["10",20,"30"];
console.log(calculateSum(input));


vedio link: https://vimeo.com/1036770388/8f8bb6a563


2 questions

let a = "10";
let b = "5";

console.log(Number(a) + Number(b));//15


// How javascript handles type coercion with + and - operators. Include examples like 10, "20" and "30" - 5.

// Type coercion with + :
// suppose if one operand is a String, it converts the other operand to string and it performs string concatenation.
// example : console.log("20" + 1);



"==" : 
It performs type coercion, it converts operands to the same type before comparison.

It allows flexibility but it can lead to an unexpected output to corceion.

example :
console.log( 2 == "2"); // true

"===" :
It does not perform type coercion .

It compares both type as well as value.

Also it ensures accuracy by avoiding  coercion.

example:
console.log( 2 === "2") // false




function stringConcat(string){
    return string.map(String).join("");
}

const input = ["Hello",42,true]
console.log(stringConcat(input))//Hello42true


vedio link: https://vimeo.com/1036770388/8f8bb6a563



3 question


const  multiply = (a,b) => a * b;
console.log(multiply(2,3));



4 question

const obj = {
    name : "javascript",
    getName: function(){
        return this.name
    }

};

console.log(obj.getName())

vedio link: https://vimeo.com/1036770388/8f8bb6a563


6.question

function createIncrementers(){
    let result = [];

    for (let i = 0; i< 3; i++){
        result.push(() => i);
    }
    return result;
}

console.log(createIncrementers()[0]());






function createCounter() {
    let counter = 0;

    return {
        increment:function(){
            counter ++;
            return counter
        }
    }
}

const counter = createCounter();
console.log(counter.increment())//1
console.log(counter.increment())//2




Arrow functions:

Pros:
1. arrow functions are shorter and easier to write

2. it automatically get the this value from outer context where they present .

cons:
1.  arrow functions dont refer to the object itself.they try to use this from the outside which can cause erros.

2. arrow functions are not great for methods where  you need to work with the objects using this.


vedio link: https://vimeo.com/1036770388/8f8bb6a563