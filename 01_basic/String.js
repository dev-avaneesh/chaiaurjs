const name = "Avaneesh";
const repoCount=20;

//console.log(name + repoCount); this is not good practice

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName=new String("Avaneesh");
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(0));
console.log(gameName.indexOf('n'));


//Sub string method (in substring negative value is not allowed)

const newString=gameName.substring(0,4)
console.log(newString);

//Slice method (in slice negative value is allowed)

const anotherString=gameName.slice(4,-8)
console.log(anotherString);

//Trim method (trim method use to remove the white space from the string)

const newStringOne="   Avaneesh   ";
console.log(newStringOne.trim());


// Replace method (replace method use to replace the string)

const url = "https://www.google.com";
console.log(url.replace('.com','.in'));

// Includes method (includes method use to check the string is present or not)

console.log(url.includes('google'));
console.log(url.includes('facebook'));

// split mathod (split method use to split the string)

console.log(url.split(""));
const name1="avaneesh";
console.log(name1.slice(6,-2));
