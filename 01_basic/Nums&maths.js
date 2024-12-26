const score=400
// console.log(score);

const balance=new Number(100);
// console.log(balance);

//toFixed method (iska use karke hum decimal value ko fix kar sakte hai)

console.log(balance.toString().length);
// console.log(balance.toFixed(2));

//toPrecision method (iska use karke hum kisi bhi number ko fix kar sakte hai)
const otherNumber=123.8966
// console.log(otherNumber.toPrecision(3));

//toLocalString method (iska use karke hum kisi bhi number ko local language me convert kar sakte hai)

const hundreds=10000000
// console.log(hundreds.toLocaleString('hi-In'));


//*********Maths******** */

//absolute method (iska use karke hum kisi bhi number ka absolute value nikal sakte hai)
const negativeNumber=-100
console.log(Math.abs(negativeNumber));

//round method (iska use karke hum kisi bhi number ko round kar sakte hai)
const decimalNumber=10.4
console.log(Math.round(decimalNumber));

//ceil method (iska use karke hum kisi bhi number ko upar round kar sakta hai)
console.log(Math.ceil(decimalNumber));

//floor method (iska use karke hum kisi bhi number ko niche round kar sakte hai)
console.log(Math.floor(decimalNumber));

//sqrt method (iska use karke hum kisi bhi number ka square root nikal sakte hai)
const squareNumber=10
console.log(Math.sqrt(squareNumber));

//pow method (iska us karke hum kisi bhi number ka power nikal sakte hai)
console.log(Math.pow(2,3));

//min method (iska use karke hum kisi bhi number ka minimum value nikal sakte hai)
console.log(Math.min(2,3,4,5,6,7,8,9,10));

//max method (iska use karke hum kisi bhi number ka maximum value nikal sakte hai)
console.log(Math.max(2,3,4,56,7,8,89));

//random method (iska use karke hum kisi number ka random value nikal sakte hai)
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);

const min = 10
const max =20
console.log(Math.floor(Math.random()*(max-min+1)+min));
