let myDate =new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); //timestamp in seconds

let newDate = new Date();
// console.log(newDate);

// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// toLacaleStringMethod(localeString Method ka use karke hum kisi bhi date ko local language me convert kar sakte hai)

console.log(newDate.toLocaleString('default',{
    weekday:"Long",
}));
