const accountId = 144553    // cant re-assign value, once stored 
let accountEmail = "hitesh@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur" //dont use

// what should we use to store account state ??
let accountState; // if no value is declared , undefined will be stored 



// accountId = 2  // not allowed

accountEmail = "h@gmail.com"
accountPassword = "21221212"
accountCity = "banglore"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and fucntional scope
*/

//better way to print all at once

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ]);