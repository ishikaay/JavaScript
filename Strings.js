const name = "Annuishika"
const repoCount = 50

//console.log(name + repoCount);        // 1st way of concatination

//console.log(`hello my name is ${name} and my count is ${repoCount}`);     // lastest method for concatination


const gameName = new String('hey! stranger....')

// console.log(name[0]);           //o/p->a
// console.log(gameName.__proto__);   //o/p-> {}
// 
// console.log(gameName.length);     // o\p-> 17
// 
// console.log(gameName.toUpperCase());      // o\p -> HEY! STRANGER....
// console.log(gameName.toLocaleLowerCase());   // o\p -> hey! stranger....
// 
// console.log(gameName.charAt(3));    // to check the character at this position  o\p -> !
// console.log(gameName.indexOf('!'));   // to check the character's index     o\p -> 3
// 
// const newString = gameName.substring(0,4)    // o\p -> hey!  -> bcz 4 is excluded
// console.log(newString);
// 
const anotherString = gameName.slice(-17,4)
console.log(anotherString);

