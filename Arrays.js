// Arrays
// js me arrays me hum har type ke data ko store kara sakte hai unlike any
//  programming like java ki hum usme same type ke data ko store karatey the arrays me 
 
// const myArr = [0,1,2,3,4,5,"Annu", 'c', true]
// console.log(myArr[6],myArr[2],myArr[7],myArr[8]);    // o/p-> Annu 2 c true
// console.log(typeof(myArr[6]),myArr[6]),                      // o/p->string  Annu
// 
// console.log(typeof(myArr[2]),myArr[2])                    // o/p-> number 2
// 
// console.log(typeof(myArr[7]),myArr[7])                    // o/p-> string c
// 
// console.log(typeof(myArr[8]),myArr[8])                    // o/p-> boolean true
// 

 // -----------------Arrays Methods--------------
 const Arr = [0,1,2,3,4]
//  Arr.push(20)
// console.log(Arr);                 //o/p->[0,1,2,3,4,20]
// 
//  Arr.push(18)
// console.log(Arr);                //o/p->[0,1,2,3,4,20,18]
// 
//  Arr.pop();
// console.log(Arr);               //o/p->[0,1,2,3,4,20]
// 
// 
//  Arr.unshift(29)        //isme hum jobhi value pass karengey vo array ke starting me add ho jati hai..o/p->[29,0,1,2,3,4,20]
// console.log(Arr);
// 
// Arr.shift()   // isme starting se values delete hoti hai....o/p->
// console.log(Arr);        //o/p->[0,1,2,3,4,20]
// 
// console.log(Arr.includes(9));             //o/p-> false(kyunki ye boolean me return karta hai)
// console.log(Arr.indexOf(20));            // o/p->  -1(bcz 20 isn't exist in Arr)
// 
// const newArr = Arr.join()
// console.log(Arr);                       //o/p-> [0,1,2,3,4]
// console.log(newArr);                    // o/p-> 0,1,2,3,4(due to join operator newArr is stored as Stirng datatype )
// console.log(typeof newArr);             // 0/p-> String

// Slice, splice

console.log("A",Arr)                     // o/p-> A [ 0, 1, 2, 3, 4 ]

const myn1 = Arr.slice(1,3)
console.log(myn1);                       // o/p-> [1,2]
console.log("B", Arr);                  // o/p-> B [ 0, 1, 2, 3, 4 ]

const myn2 = Arr.splice(1,3)           //splice me ending index bhi include hota hai plus ye utna part ussey hata hi deta hai aur slice me ending index excluded hota hai 
console.log("C", Arr);                 // o/p-> C [ 0, 4 ]
console.log(myn2);                     // o/p-> [1,2,3] 




