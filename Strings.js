const doubleQ = "Programming Double";
const singleQ = 'Programming Single';

console.log(singleQ);
console.log(doubleQ);

const str_back_ticks = `This is ${doubleQ} and ${singleQ}`
console.log(str_back_ticks);

const sum = `${1+2+3}`
console.log(`Sum is ${sum}`);

//include \ \ 
const sentence = "I \"love\" spinach";
console.log("Defined: ", sentence)

const multiline_str = `
        This is a 
        string which
        spans multiple lines
        `
console.log("A multi-line string: \n", multiline_str)

//String and object
const name_1 = "David"
const name_2 = "David"

const name_obj1 = new String("David")
const name_obj2 = new String("David")

console.log("Type of name 1: ", typeof name_1)
console.log("Type of name 1: ", typeof name_obj1)

console.log(name_1 == name_2)
console.log(name_1 == name_obj1)
console.log(name_obj1 == name_obj2)
console.log(name_obj1.valueOf() == name_obj2.valueOf())

console.log("\n");
console.log(name_1 === name_2)
console.log(name_1 === name_obj1)
console.log(name_obj1 === name_obj2)
console.log(name_obj1.valueOf() === name_obj2.valueOf())


console.log("\n");
const empName = "Jane Chang";
console.log("Length: ", empName.length)
console.log("Index: ", empName.indexOf("h"))

//DATES TYPES

