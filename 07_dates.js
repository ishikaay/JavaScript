//Dates

let myDate = new Date();
// console.log(myDate);                                 //  o/p->   2026-04-14T14:15:33.007Z
// console.log(myDate.toString());                      // o/p->    Tue Apr 14 2026 19:46:17 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());                     //  o/p-> 2026-04-14T14:26:43.839Z
// 
// console.log(myDate.toLocaleDateString());              //  o/p-> 14/4/2026
// 
// console.log(myDate.toTimeString());                    //  o/p-> 19:56:43 GMT+0530 (India Standard Time)
// 
// console.log(myDate.getTimezoneOffset());              //  o/p->  -330
// 
// console.log(myDate.getMonth());                      //  o/p->   3
// 
// console.log(myDate.getUTCMonth());                   //  o/p->   3
// 
// console.log(typeof myDate);                         //  o/p->    object
// 

let myCreatedDate = new Date(2005,4,20)                 // js me months zero se start hotey hai [that's why---> 4=may]
// console.log(myCreatedDate);                              //  o/p-> 2005-01-19T18:30:00.000Z
// console.log(myCreatedDate.toDateString());                //  o/p-> Fri May 20 2005
//let myCreatedDate = new Date(2005,4,20,4,55);                //  o/p-> 20/5/2005, 4:55:00 am
//let myCreatedDate = new Date("2005-05-20");                    //  o/p->    20/5/2005, 5:30:00 am[in [dd/mm/yy] format]
// let myCreatedDate = new Date("01-14-2005")                       //  o/p-> 20/5/2005, 5:30:00 am[in [dd/mm/yy] format]
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);                           // cuurent day ke liye   [o/p-> 1776179890155(in miliSeconds)]
// console.log(myCreatedDate.getTime());               // kisi particular date pe miliseconds calculate karna [o/p-> 1116527400000(in miliSeconds)]
// console.log(Date.now());                            // o/p-> 1776179890155(in miliSeconds)
// 
//console.log(Math.floor(Date.now()/1000));           // this will give you the time in seconds not in miliSeconds  o/p-> 1776180188

let newDate = new Date()
// console.log(newDate.toDateString());                  //o/p-> Tue Apr 14 2026
// console.log(newDate.getDay());                        //o/p-> 2
// console.log(newDate.getFullYear());                   //o/p-> 2026
// console.log(newDate.getMonth());                      //o/p-> 3
// console.log(newDate.getUTCHours());                   // o/p-> 15
// console.log(newDate.getHours());                      //o/p-> 21


let methodDate = newDate.toLocaleString('default', {
    weekday:"long", 
    calendar:"long"
})
console.log(methodDate);                       // o/p-> Tuesday
