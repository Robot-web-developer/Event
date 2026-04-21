{ 
console.log(`Before swap: p = ${p}, q = ${q}`);

p = p + q; // sum of both
q = p - q; // original p
p = p - q; // original q

console.log(`After swap: p = ${p}, q = ${q}`);
}

// Swapping using a Temporary Variable

let a = 5;
let b = 10;
let temp;
temp = a;
a = b;
b = temp;
console.log(`a: ${a}, b: ${b}`); // Output: a: 10, b: 5

// Swapping using Destructuring Assignment
let c = 5;
let d = 10;
[c, d] = [d, c];
console.log(`c: ${c}, d: ${d}`); // Output: c: 10, d: 5


// Swapping using Bitwise XOR Operator
let e = 5;
let f = 10;
e = e ^ f;
f = e ^ f;
e = e ^ f;
console.log(`e: ${e}, f: ${f}`); // Output: e: 10, f: 5

let a = 5;
let b = 10;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(`a: ${a}, b: ${b}`); // Output: a: 10, b: 5