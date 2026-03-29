let score = 200.5

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)   //type conversion
console.log(typeof valueInNumber);
console.log(valueInNumber);


//type conversion of given below inputs into Numbers :-
// "33" => 33
// "33annu" OR "33abc" => NaN
// true/false => Infinity
// true => 1  , false => 0
// null => 0
// undefined => NaN  NaN- means Not A Number


//-------------Type conversion into boolean---------
let isLoggedIn = "hare Krishna";
console.log(typeof (isLoggedIn));
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof (booleanIsLoggedIn));
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
//"abc" => true
//"" => false


//--------------TYPE CONVERSION INTO STRINRG----------
  
let num = 33;
console.log(typeof num);

let stringNum = String(num)
console.log(typeof stringNum);
console.log(stringNum);

//*************************************OPERATIONS********************************************
let value = 3
let negValue = -value
console.log(negValue);
 console.log(2+5);
 console.log(2-5);
 console.log(2*5);
 console.log(2**5);
 console.log(2/5);
 console.log(2%5);


 let str1 = "Ishika"
 let str2 = "yadav"

 let str3 = str1 +" "+ str2;
 console.log(str3);

 console.log("1" + 2);     //12
 console.log(1 + "2");     // 12
 console.log("1" + 2 + 2);  // 122
 console.log(1 + 2 + "2");  //32

 
 