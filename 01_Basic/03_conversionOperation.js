// let score = "33"

// console.log(typeof score);
// console.log(typeof (score));
// // -----------------------------------------------------

// let score3 = undefined

// console.log(typeof score3);

// let valueInNumber3 = Number (score3)
// console.log(typeof valueInNumber3)
// console.log(valueInNumber3);  

// let valueInNumber = Number(score)   //while coversion first letter should be capital i.e- Number,String etc to convert
// console.log(typeof valueInNumber);

// //-------------------------------------------------------------------

// let score1 = "33abc"

// console.log(typeof score1);

// let valueInNumber1 = Number (score1)
// console.log(typeof valueInNumber1)
// console.log(valueInNumber1);         //NaN - not a number 
// //dont rely on Number

// //-----------------------------------------------------------------------

// let score2 = null

// console.log(typeof score2);

// let valueInNumber2 = Number (score2)
// console.log(typeof valueInNumber2)
// console.log(valueInNumber2);        //iin case of temperature it may be wronng


// //-------------------------------------------------------------------------------

// let score4 = true

// console.log(typeof score4);

// let valueInNumber4 = Number (score4)
// console.log(typeof valueInNumber4)
// console.log(valueInNumber4);  

// //-------------------------------------------------------------------------

// let score5 = "Hitesh"

// console.log(typeof score5);

// let valueInNumber5 = Number (score5)
// console.log(typeof valueInNumber5)
// console.log(valueInNumber5);  


// // "33" => 33
// // "33abc" => NaN
// // true => 1; false => 0

// //-----------------------------------------------------

// let isLoggedIn = "Hitesh"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// // 1 => true; 0 => false
// // "" => false
// // "Hitesh" => true

// //------------------------------------------------------------------

// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// //------------------------------------------------------------------------

// ***************************** Operations ********************************************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Hitesh"

let str3 = str1 + str2                                  // operation of adding + two strings or string and number is called concatenation 
// console.log(str3)


// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + "2")
// console.log(1 + 2 + "2")
console.log("2" + 3 + 4 + 5 + "2" + "6");  
// "2" + 3: The string concatenation will occur, resulting in "23".
// "23" + 4: The string concatenation will occur again, resulting in "234".
// "234" + 5: Another string concatenation, resulting in "2345".
// "2345" + "2": The strings are concatenated, resulting in "23452".
// "23452" + "6": Final concatenation, resulting in "234526".
// Therefore, the output will be: "234526".


// console.log( (3+4) * 5 % 3)

// console.log(+true)
// console.log(+"")

let gameCounter = 100
++gameCounter;           //prefix increment

// console.log(gameCounter)

gameCounter++;          //postfix increment
// console.log(gameCounter)

//search on MDN Documentation

//Increment, Decrement | Prefix(prePaid sim), Postfix(postPaid sim)

// let y, x = 5
// y = ++x                    //operation and operand
// console.log(y)
// console.log(x)

// let y, x = 5
// y = x++
// console.log(y)
// console.log(x)

// Same for decrement

// let y, x = 5
// y = --x
// console.log(y)
// console.log(x)

// let y, x = 5
// y = x--
// console.log(y)
// console.log(x)

//Miscellaneous    https://youtu.be/aYqsb3h6JGQ?si=7zCGsVsFT4PD-Wc1


let y, x = 5, a = 4, b = 6
y = --x + a++ + ++b              // //4 + 4 + 7  = 15
console.log(y)                
console.log(a)              
console.log(b)               
console.log(x)               


