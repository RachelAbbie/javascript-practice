"use Strict"

console.log("while loops");

let i = 1;

/*

console.log("Integers from 1 to 10: ")
while(i <= 10) {
    console.log(i)
    i++;
} 

console.log("Even integers from 1 to 20: ")

i = 1;

while ( i <= 20) {
    let num = i % 2;

    if ( num == 0) {
        console.log(i);
    }
    i++;
}

i = 11
while ( i > 1 ) {
   

    i--;
    if ( i == 5) {
        //break;
        continue;
    }
    console.log(i);
}

i = 1;


console.log("Increasing order of series (with break): ");


while (i <= 10) {
    console.log(i);

    i++;
    if (i == 5) {
        break;
    }
}


console.log("Decreasing order of series (with continue): ");

i = 11
while (i > 1 ) {
    
    i--;
    if (i == 5) {
        continue;
    }

    console.log(i);
}


console.log("do-while Loops: ");

let factorial = 1;
let n = 5;
i = 5;

do {
    factorial *= 1;
    i++;
}

while(i <= n);

console.log(`Factorial of ${n} = ${factorial}`)
*/

console.log("Fibonacci series using for loop: ");

let a = 0, b = 1, c;
let count = 10;
for (let i = 3; i <= count; i++){
    c = a + b;
    a  = b;
    b = c;

    console.log(c)
}

const myString = "WebDevelopment is FUN! WebDevelopment"
//myString.replace("WebDevelopment", "programming");
console.log(myString.replace("WebDevelopment", "programming"));
console.log(myString.replace("webdevelopment", "programming"));

console.log("Boolean value of 0: ", Boolean(0));
console.log("Ceiling value of 31.2:", Math.ceil(31.2));
console.log(`${45/0}`)
