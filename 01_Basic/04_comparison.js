// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)        the == operator checks for equality, and in this case, 2 is not equal to 1.
// console.log(2 != 1)       != operator is the "not equal" operator, and it checks whether the two operands are not equal     

// when same data types are not compared

// console.log("2" > 1);
// console.log("02" > 1);

// these are avoided while coding for clean code

// some unexpected results
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// the reason is that an equality check == and comparisons > < >= <=nwork diffrently
// comparisons convert null to a number, treating it as zero 
// thats why null >= 0 is true and null > 0  is false

// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined < 0);


// ===  strict checks datatype and value both

console.log("2" === 2);