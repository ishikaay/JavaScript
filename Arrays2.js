const Marvels_Heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman", "flash", "Batman"]
//------------push mehtod----------------
// Marvels_Heros.push(dc_heros)

// console.log(Marvels_Heros)              //o/p-> [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'Batman' ] ]
// console.log(Marvels_Heros[3][2]);       // o/p-> Batman

//------------------------concatination method--------------------------
// const all_heros = Marvels_Heros.concat(dc_heros)
// console.log(all_heros);                //o/p->[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'Batman' ]

//------------------------spread method--------------------------
const all_new_heros = [...Marvels_Heros,...dc_heros]
//console.log(all_new_heros);                   //o/p->[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'Batman' ]

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_arr.flat(Infinity) // flat() me hume ek depth deni hoti hai ki kitni depgth tak arrays ko break karke single array me conert karna hai
console.log(real_another_array); //o/p-> [1,2,3,4,5,6,7,6,7,4,5]
//-------------------------another method-------------------------------

console.log(Array.isArray("Tanishka"));    //o/p-> 'isArray' is used for checking that given name is present in the form of array or not o/p-> False
console.log(Array.from("Tanishka"));      //o/p-> ['T', 'a', 'n','i', 's', 'h','k', 'a'] 'from' is used for converting the given datatype into an Array

console.log(Array.from({Name: "Tanishka"})); //o/p-> [],,bcz jab ye'from' convert nahi kar pata hai arrays me to ye empty array return kar deta hai
                                            //isiliye aise cases me batana padta hai ki key ko ocnvert karna hai ya something else

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));   // o/p->[ 100, 200, 300 ] ,, "of" ye same from ki tarah hinkaam karega
