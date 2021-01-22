"use Strict"

const time = new Date();
console.log(`Current time: \n" ${time}`);

console.log("\n");

//don't use leading zeros 
const time1 = new Date(2021, 9, 10, 15, 21, 43);
console.log("Year, Month, Day, hour, min, sec: \n", time1);
console.log("\n");

const time2 = new Date("April 9, 2021")
console.log("Initialized with a date string: \n", time2);
console.log("\n");

const time3 = new Date("2019-10-20")
console.log("Initialized with (yyyy-mm-dd): \n", time3);
console.log("\n");

const time4 = new Date()
console.log("Current time in timezone: \n", time4);

console.log("My timezone offset in minutes: ", time4.getTimezoneOffset());

console.log("The UTC time is: ", time4.toUTCString())