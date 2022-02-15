// --------------------------------javascript basics -------------------

//****************************1.Sum two numbers*******************************


// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

// function myFunction(a, b){
//    return a+b
// }
// console.log(myFunction(1,2)); //3
// console.log(myFunction(1,10)); //11
// console.log(myFunction(99,1)); //100


//**********************2.Comparison operators, strict equality***********************


// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

// function myFunction(a, b){
   //    return a === b;
   // }
   // console.log(myFunction(2, 3)); //false
   // console.log(myFunction(2, 2)); //true
   // console.log(myFunction(1,"1")); //fasle
   // console.log(myFunction("10","10"));//true
   

//**********************3.Get type of value************************************************************** */


// function myFunction(a) {
//    return typeof a;
// }
// console.log(myFunction(1));//'number'
// console.log(myFunction(false));//'boolean'
// console.log(myFunction({}));//'object'
// console.log(myFunction(null));//'object'
// console.log(myFunction('string'));//'string'
// console.log(myFunction(['array']));//'object'

// 4.Get nth character of string

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

// function myFunction(a,n){
//    return a.charAt(n-1);
// }

//author

// function myFunction(a, n) {
//    return a[n - 1];
// }

// console.log(myFunction('abcd',1));//'a'
// console.log(myFunction('zyxbwpl',5));//'w'
// console.log(myFunction('gfedcba',3));//'e'

//***********************4.Remove first n characters of string********************************************* */

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

// function myFunction(a) {
//    return a.slice(3);
// }
// console.log(myFunction('abcdefg')); //defg
// console.log(myFunction('1234'));//4
// console.log(myFunction('fgedcba'));//dcba

//************5.Get last n characters of string******************** */

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

// function myFunction(str) {
//    return str.slice(-3);
// }
// console.log(myFunction('abcdefg'));    //efg
// console.log(myFunction('1234'));       //234
// console.log(myFunction('fgedcba'));    //cba

//******************6.Get first n characters of string********************** */

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

// function myFunction(a) {
//    return a.slice(0, 3);
// }
// console.log(myFunction('abcdefg'));  //'abc'
// console.log(myFunction('1234'));    //'123'
// console.log(myFunction('fgedcba')); //'fge'

//************************7.Extract first half of string******************************* */

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

// function myFunction(a) {
//    return a.slice(0, a.length / 2);
// }

// console.log(myFunction('abcdefgh'));   //'abcd'
// console.log(myFunction('1234'));       //'12'
// console.log(myFunction('gedcba'));     //'ged'

//**************************8.Remove last n characters of string************************************ */

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

// function myFunction(a) {
//    return a.slice(0, -3);
// }

// console.log(myFunction('abcdefg')); //'abcd'
// console.log(myFunction('1234')); //'1'
// console.log(myFunction('fgedcba')); //'fged'


//************************9.Return the percentage of a number*************************************** */

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

// function myFunction(a, b) {
//    return b / 100 * a
//  }

//  console.log(myFunction(100,50)); //50
//  console.log(myFunction(10,1)); //0.1
//  console.log(myFunction(500,25));//125


//*****************************10.Check if a number is even***************************************** */

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

// function myFunction(a) {
//    return a % 2 === 0
// }

// console.log(myFunction(10)); //true
// console.log(myFunction(-4));//true
// console.log(myFunction(5));//false
// console.log(myFunction(-111));//false

//******************************11.How many times does a character occur?******************************* */

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

// function myFunction(a, b) {
//    return b.split(a).length - 1
// }

// console.log(myFunction('m', 'how many times does the character occur in this sentence?')
// );//2
// console.log(myFunction('h', 'how many times does the character occur in this sentence?')
// );//4
// console.log(myFunction('?', 'how many times does the character occur in this sentence?')
// );//1
// console.log(myFunction('z', 'how many times does the character occur in this sentence?')
// );//0


//***********************12.Check if a number is a whole number************************************ */

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

// function myFunction(a) {
//    return Math.floor(a) === a;
//  }
// console.log(myFunction(4));//true 
// console.log(myFunction(1.123));//false 
// console.log(myFunction(1048));//true 
// console.log(myFunction(10.48));//false 


//***************************13.Multiplication, division, and comparison operators*************************************** */

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

// function myFunction(a, b) {
//    return a < b ? a / b : a * b
//  }

// console.log(myFunction(10, 100));//0.1
// console.log(myFunction(90, 45));//4050
// console.log(myFunction(8, 20));//0.4
// console.log(myFunction(2, 0.5));//1


//*******************************14.Check whether a string contains another string and concatenate****************************************** */

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

// function myFunction(a, b) {
//    return a.includes(b) ? b+a:a+b;
// }

// console.log(myFunction('cheese', 'cake'));//'cheesecake'
// console.log(myFunction('lips', 's'));//'slips'
// console.log(myFunction('Java', 'script'));//'Javascript'
// console.log(myFunction(' think, therefore I am', 'I'));//'I think, therefore I am'



//***************************15.Round a number to 2 decimal places************************************************ */

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

// function myFunction(a, b) {
//    // return Math.round((a.Number.EPSILON)*100/100);//for two  decimal place
//    return Number(a.toFixed(2));
// }
// console.log(myFunction(2.12397));//2.12
// console.log(myFunction(3.136));//3.14
// console.log(myFunction(1.12397));//1.12
// console.log(myFunction(26.1379));//26.14


//******************************16.Split a number into its digits************************************** */

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting


// function myFunction(a) {
//    let b=a.toString().split("");
//    return b.map(x=>parseInt(x))
// }

// console.log(myFunction(10));// [1,0]
// console.log(myFunction(931));//[9,3,1]
// console.log(myFunction(193278));//[1,9,3,2,7,8]


//***************************17.Clear up the chaos behind these strings************************* */
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

// function myFunction(a, b) {
//    const first = a.split('').map(x=> x.replace('%', '')).join('');
//    const second = b.split('').reverse().map(x=> x.replace('%', '')).join('');
//    return first.charAt(0).toUpperCase() + first.slice(1) + second
// }

// //author 
// function myFunction(a, b) {
//    const func = x => x.replace('%','');
//    const first = func(a);
//    const second = func(b).split('').reverse().join('');
//    return first.charAt(0).toUpperCase() + first.slice(1) + second;
//  }

//  console.log();//
//  console.log();//
//  console.log();//
//  console.log();//


//********************************18.Return the next higher prime number*********************************** */

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

// function myFunction(a) {
//    let b = 0;
//     do {
//    	b = 0;
//    	for (let i = 2; i <= a; i++) {
//          if (a% i === 0) b++;
//          // console.log(a);
//    	}
//    	a++;
//    }
//    while (b > 1);
//    console.log(a);
//    console.log(b);
//     return a - 1;	
// }
// console.log(myFunction(10));

// 19.Basic JavaScript math operators

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

// function myFunction(a, b, c, d, e, f){
//    return (((a+b)-c)*d/e)**f
// }
// console.log(myFunction(6,5,4,3,2,1));  //10.5
// console.log(myFunction(6,2,1,4,2,3));  //2744
// console.log(myFunction(2,3,6,4,2,3));  //-8

// 20.Find next higher natural number that is divisble by y

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

// function myFunction(x,y){
//    while (x % y !== 0) x++;
//    return x;
//    }

// console.log(myFunction(1, 23)); //23
// console.log(myFunction(23, 23)); //23
// console.log(myFunction(7, 3)); //9
// console.log(myFunction(-5, 7));//0

// 21.Insert character after every n characters (backwards)

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

// function myFunction(a,b){
//    return a.replace(/(?=(...)+$)/g, b);
// }

//author

// function myFunction(a, b) {
//    let result = [];
//    let rest = a;
//    while (rest.length) {
//    	result.push(rest.slice(-3));
//    	rest = rest.slice(0, -3);
//    }
//    return result.reverse().join(b);
// }

// console.log(myFunction('1234567','.')); //'1.234.567'
// console.log(myFunction('abcde','$')); //'ab$cde'
// console.log(myFunction('zxyzxyzxyzxyzxyz','w')); //'zwxyzwxyzwxyzwxyzwxyz'

// 22.Find the correct word by incrementing letters in alphabet

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

// function myFunction(str){
//    return str.split("").map((char) => String.fromCharCode(char.charCodeAt() + 1)).join("");
// }

//author

// function myFunction(str) {
//    const arr = [...str];
//    const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
//    return correctedArray.join('');
//  }

// console.log(myFunction('bnchmf')); //'coding'
// console.log(myFunction('bgddrd')); //'cheese'
// console.log(myFunction('sdrshmf')); //'testing'