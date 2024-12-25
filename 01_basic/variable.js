const accountId = 144553
let accountEmail="hitesh@google.com"
var accountPassword="12345"//prefer not to use var because of issue in block scope and functional scope
accountCity="Jaipur"
let accountState; //if in java script we declare a variable and not assign any value then it will be undefined

// accountId = 2 //not allowed

accountEmail="hc@hc.com"
accountPassword="122121212"
accountCity="Banglore"

console.log(accountId);
console.table({accountEmail,accountPassword,accountCity})