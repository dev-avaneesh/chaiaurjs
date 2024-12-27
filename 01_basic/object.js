// object literals
const mySym = Symbol("key1")
const JsUser ={
    name: "Avaneesh",
    [mySym]:"myKey1",
    age:25,
    locaton:"jaipur",
    email:"ritesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email="hitesh@chatgpt.com"
console.log(JsUser);
//freeze method ka matlab hai ki hum kisi bhi object ko change nahi kar sakte
// Object.freeze(JsUser);
JsUser.email="ritesh@microsoft.com"
// console.log(JsUser);

//greeting method (greeting method ka use karke hum kisi bhi object ka data access kar sakte hai)
JsUser.greeting = function(){
//     console.log("Hello JsUser");
 }
JsUser.greetingTwo = function(){
    // console.log(`Hello JsUser ${this.name}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTw0());

// Singleton

//const tinderUser = new Object()
const tinderUser = {}
 tinderUser.id="123abc"
 tinderUser.name="Avaneesh"
 tinderUser.isLoggedIn =false

//  console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"ritesh",
            lastname:"choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign( {}, obj1,obj2)

//spread method ka use hum do object join krne ke liye bolte hai

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
