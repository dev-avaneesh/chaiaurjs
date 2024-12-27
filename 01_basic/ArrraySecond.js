const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//concat method (concat method ka use karke hum do array ko join kar sakte hai)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//spread operator (spread operator ka use karke hum do array ko join kar sakte hai)

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

//flat method (flaat matlab ek array me do array ko join kar dena)

const numArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(numArr.flat(2));

//convert array to string
const strArr =["Avaneesh"]
console.log(Array.isArray(strArr));
console.log(Array.from("Avaneesh"));