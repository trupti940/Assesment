problem 1

Error based question

function fetchData() {
    Promise.all([
        new Promise(resolve => setTimeout(() => { console.log("Task 1"); resolve(); }, 0)),
        new Promise(resolve => { console.log("Task 2"); resolve(); }),
        new Promise(resolve => { console.log("Task 3"); resolve(); })
    ]).then(() => console.log("Completed!"));
}

fetchData();


output based question

console.log("A");
setTimeout(() => console.log("B"), 1000);  
Promise.resolve().then(() => console.log("C"));  
console.log("D");


related topic question

javascript(single-threaded):
JavaScript runs in a single-threaded environment, meaning it can only execute one operation at a time. 

it can manage asynchronous tasks using the event loop.

JavaScript uses the event loop to handle tasks like I/O operations without blocking the execution of other code.

This makes JavaScript highly efficient for tasks like web servers, where it can handle many asynchronous requests without blocking the main thread.

Python:

Python, in contrast, supports multi-threading, which allows multiple threads to run in parallel.

This is useful when you need to perform computationally intensive operations or handle multiple tasks at once. 

Python's Global Interpreter Lock (GIL) limits true parallel execution in some cases (specifically for CPU-bound tasks), 
although threading works well for I/O-bound tasks.





problem 2

Error based question

async function fetchData() {
    try {
        const response = await fetch("invalid-url");
        if (!response.ok) {
            throw new Error(HTTP error! Status: ${response.status});
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}
fetchData();




related topic question:

Error Handling Comparison


.catch is specific to Promises and works for the entire chain, while try/catch is more general and works within async functions.


fetch("invalid-url")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error in .catch:", error.message));



try/catch integrates better with synchronous code and control flow constructs like loops.

async function fetchWithErrorHandling() {
    try {
        const response = await fetch("invalid-url");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error in try/catch:", error.message);
    }
}
fetchWithErrorHandling();





Problem 3


Error Based Question



if (!Object.entries) {
    Object.entries = function (obj) {
        if (obj === null || typeof obj !== "object") {
            throw new TypeError("Object.entries called on a non-object");
        }

        const entries = [];
       
        const keys = Object.getOwnPropertyNames(obj);

        keys.forEach((key) => {
            entries.push([key, obj[key]]);
        });

        return entries;
    };
}

const testObj = Object.defineProperties({}, {
    visibleProp: { value: 42, enumerable: true },
    hiddenProp: { value: "secret", enumerable: false },
});

console.log(Object.entries(testObj));





Related Topic Question:

A polyfill is a piece of code that adds missing features or functionality to older browsers or environments.

It helps make modern features work in places where they are not natively supported. 

For example, if an older browser doesn't support Array.prototype.includes, a polyfill adds this method so developers can use it without worrying about compatibility.

a transpiler like Babel is a tool that converts modern JavaScript code into an older version that works in all browsers.

Instead of adding features like a polyfill, it focuses on changing the code's syntax. 


For example, Babel can convert modern JavaScript features, like arrow functions, into older function expressions, so the code works in older browsers.





Problem 4


Error Based Questions

const { a, b: { c } = {} } = { a: 1 };
console.log(a, c); 



Output-Based Question:

const { user: { profile: { name }, role } } = data;
console.log(name: ${name}, role: ${role}); 



Related Topic Question:

Traditional Access:
To access nested properties, developers use repetitive dot notation, which can become verbose and error-prone:

const name = data.user.profile.name;
const role = data.user.role;
console.log(name, role);



Destructuring Access:
Using destructuring, the same properties can be extracted in a single concise step:

const { user: { profile: { name }, role } } = data;
console.log(name, role);






Problem 5


Error-Based Debugging


const merged = { ...obj2, ...obj1 }; 
console.log(merged); 



Output-Based Question

function combineUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

const result = combineUnique([1, 2], [2, 3]);
console.log(result); 




Related Topic Question


The spread operator helps you update nested properties without modifying the original object. 

This is useful for keeping data immutability, which is especially important in many JavaScript applications. 

Immutability ensures that the original data remains unchanged, which is especially useful in many JavaScript applications, 
like in React or when managing application state.


Example:

const user = {
    name: "Alice",
    address: {
        city: "Wonderland",
        zip: 12345
    }
};

const updatedUser = {
    ...user,
    address: {
        ...user.address,
        city: "New Wonderland"
    }
};

console.log(updatedUser);
console.log(user);



problem 6

Error based question

function multiply(...nums) {
    if (nums.length === 0) return 1;  
    return nums.reduce((prod, num) => prod * num);
}

console.log(multiply());  
console.log(multiply(2, 3, 4));  



OutputBased questions

function findMax(...numbers) {
    return Math.max(...numbers);
}

console.log(findMax(1, 2, 3));  


Realted topic question

Rest parameters allow you to gather multiple function arguments into an array, 
making it easier to handle variable-length argument lists.


When you combine rest parameters with destructuring, you can directly extract
certain values from an array (or object) and collect the remaining values into a single variable.

This is useful when you want to work with the first few elements separately and group the rest into an array.

The combination of rest parameters and destructuring can make functions more readable, flexible, and efficient



problem 7

Error based question


const add = (a) => (b) => (c) => a + b + c;  

const curriedAdd = add(1)(2)(3);  
console.log(curriedAdd);  



output based question


const cuboidVolume = (length) => (width) => (height) => length * width * height;

const volume = cuboidVolume(3)(4)(5);  
console.log(volume);  



Related Based question

Function Composition refers to combining simple functions to create more complex ones. 
Currying is beneficial because it allows us to easily reuse functions with different arguments, which is key to composition.


Currying allows you to create smaller, reusable functions that can be composed and partially applied.

Partial application allows you to preset some arguments of a function and call it later with the remaining ones.


Currying and partial application make your code more modular, flexible, and reusable, especially when you work with functions that take multiple arguments.


