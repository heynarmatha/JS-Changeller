//---------------------------------javascript array--------------------------------------------------//

// ***1.Remove first n elements of an array***

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

// function myFunction(a) {
//    return a.slice(3);
// }
//  console.log(myFunction([1,2,3,4]));//[4]
//  console.log(myFunction([5,4,3,2,1,0]));//[2,1,0]
//  console.log(myFunction([99,1,1]));//[]


 //****2.Get nth element of array** */

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element a

//  function myFunction(a, n) {
//    return Number(a.slice(n-1,n))
// }
//author
// function myFunction(a, n) {
//    return a[n - 1];
// }

// console.log(myFunction([1,2,3,4,5],3));//3
// console.log(myFunction([10,9,8,7,6],5));//6
// console.log(myFunction([7,2,1,6,3],1));//7


//***3.Get last n elements of an array*** */

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

// function myFunction(a) {
//    return a.slice(-3);
// }

// console.log(myFunction([1,2,3,4]));//[2,3,4]
// console.log(myFunction([5,4,3,2,1,0]));//[2,1,0]
// console.log(myFunction([99,1,1]));//[99,1,1]


// ****4.Get first n elements of an array*******

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

// function myFunction(a) {
//    return a.slice(0, 3);
// }

// console.log(myFunction([1,2,3,4]));//[1,2,3]
// console.log(myFunction([5,4,3,2,1,0]));//[5,4,3]
// console.log(myFunction([99,1,1]));//[99,1,1]

// *****3.Return last n array elements******\

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

// function myFunction(a, n){
//    return a.slice(-n) 
// }
// console.log(myFunction([1, 2, 3, 4, 5], 2));
// console.log(myFunction([1, 2, 3], 6));
// console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3));

//**4.Remove a specific array element */

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

// function myFunction(a, b){
//    return a.filter((x)=> x !==b)
// }
// console.log(myFunction([1,2,3], 2));// [1, 3]
// console.log(myFunction([1,2,'2'], '2'));// [1, 2]
// console.log(myFunction([false,'2',1], false));// ['2', 1]
// console.log(myFunction([1,2,'2',1], 1));//[2, '2']


// 5.Count number of elements in JavaScript array

// Write a function that takes an array (a) as argument
// Return the number of elements in a

// function myFunction(a) {
//    return a.length;
// }
// console.log(myFunction([1,2,2,4]));//4
// console.log(myFunction([9,9,9]));//3
// console.log(myFunction([4,3,2,1,0]));//5

// 6.Count number of negative values in array

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

// function myFunction(a){
//    let b =a.filter((x)=> x <0 );
//    return b.length;
// }

//author

// function myFunction(a) {
//    return a.filter((el) => el < 0).length;
// }

// console.log(myFunction([1,-2,2,-4]));//2
// console.log(myFunction([0,9,1]));//0
// console.log(myFunction([4,-3,2,1,0]));//1

// 7.Sort an array of numbers in descending order

// function myFunction(arr){
//    let result = arr.sort(function(a,b){
//       return b-a ;
//    })
//    return result;

   // return arr.sort((a,b) => a-b)
// }
// console.log(myFunction([1,3,2]));
// console.log(myFunction([4,2,3,1]));

// 8.Sort an array of strings alphabetically

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

// function myFunction( arr ) {
//    return arr.sort()
// }
// console.log(myFunction(['b', 'c', 'd', 'a']));
// console.log(myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

// 9.Return the average of an array of numbers

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

// function myFunction(arr) {
//    return arr.reduce((a,b) => a+b)/arr.length
// }
// console.log(myFunction([10,100,40]));
// console.log(myFunction([10,100,1000]));
// console.log(myFunction([-50,0,50,200]));

// 10.Return the longest string from an array of strings

// Write a function that takes an array of strings as argument
// Return the longest string


// function myFunction(arr){
//    return arr.reduce((a,b) => a.length>=b.length ? a:b)
// }
//  console.log(myFunction(['help', 'me']));
//  console.log(myFunction(['I', 'need', 'candy']));

// 11.Check if all array elements are equal

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// function myFunction(arr){
//    return !!arr.reduce((a,b) => a===b ? a:NaN)
//    //author
//    // return new Set(arr).size === 1
// }
// console.log(myFunction([true, true, true, true]));// 
// console.log(myFunction(['test','test','test']));// 
// console.log(myFunction([1,1,1,2]));// 
// console.log(myFunction(['109',10,10,10]));// 

// 12.Merge an arbitrary number of arrays

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

// function myFunction(...arrays){
//    return [].concat(...arrays);
//    //author
//    // return arrays.flat();
// }
// console.log(myFunction([1, 2, 3], [4, 5, 6]));
// console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]));
// console.log(myFunction([true, true], [1, 2], ['a', 'b']));

// 13.Sort array by object property

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

// function myFunction(arr){
//    const sort = (x, y) => x.b - y.b;
//    return arr.sort(sort);
// }

// console.log(myFunction([{num:1,no:2},{num:5,no:4}]));
// console.log(myFunction([{num:2,no:10},{num:5,no:4}]));
// console.log(myFunction([{num:1,no:7},{num:2,no:1}]));

// 14.Merge two arrays with duplicate values

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// function myFunction(a,b){
//    let result =[...new Set(a.concat(b))];
//    return result.sort((a,b) => a-b)
//    //author
//    // return [...new Set([...a, ...b])].sort((x, y) => x - y);
// }
// console.log(myFunction([1, 2, 3], [3, 4, 5]));
// console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));


// 15.Sum up all array elements with values greater than

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

// function myFunction(a,b){
//    return a.filter((x) => x>b).reduce((a,b)=>a+b)
// }

// author

// function myFunction(a, b) {
//    return a.reduce((sum, cur) => {
//      if (cur > b) return sum + cur;
//      return sum;
//    }, 0);
//  }

// console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2));
// console.log(myFunction([-10, -11, -3, 1, -4], -3));
// console.log(myFunction([78, 99, 100, 101, 401], 99));

// 16.Create a range of numbers

// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

// function myFunction(min, max) {
//    let arr = [];
//    for (let i = min; i <= max; i++) {
//      arr.push(i);
//    }
//  return arr;
//  }

// console.log(myFunction(2, 10));
// console.log(myFunction(1, 3));
// console.log(myFunction(-5, 5));
// console.log(myFunction(2, 7));

// 17.Group array of strings by first letter

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

// function myFunction(arr) {
//    return arr.reduce((pv, cv) => {
//      const c = cv[0].toLowerCase();
//      return {...pv, [c]: [...(pv[c] || []), cv]}
//    }, {})
//  }

// console.log(myFunction(['Alf', 'Alice', 'Ben'])); //{ a: ['Alf', 'Alice'], b: ['Ben']}
// console.log(myFunction(['Ant', 'Bear', 'Bird'])); //{ a: ['Ant'], b: ['Bear', 'Bird']}
// console.log(myFunction(['Berlin', 'Paris', 'Prague'])); //{ b: ['Berlin'], p: ['Paris', 'Prague']}

// 18.Define an array with conditional elements

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

// function myFunction(arr,num){
//    return [num < 6 ? 0 : num, ...arr];
// }

//author

// function myFunction(arr, num) {
//    return [...(num > 5 ? [num] : [0]), ...arr];
//   }

// console.log(myFunction([1,2,3], 6)); //[6,1,2,3]
// console.log(myFunction(['a','b'], 2)); //[0,'a','b']
// console.log(myFunction([null,false], 11)); //[11,null,false]

// 19.Get every nth element of array

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

// function myFunction(a,n){
//    return a.filter((e,i) => i%n ===n-1)
// }

//author

// function myFunction(a, n) {
//    let rest = [...a];
//    let result = [];
//    for (let i = 0; i < a.length; i++) {
//       if (rest.length < n) break;
//       result.push(rest[n - 1]);
//       rest = rest.slice(n);
//    }
//    return result; 
// }

// console.log(myFunction([1,2,3,4,5,6,7,8,9,10],3)); //[3,6,9]
// console.log(myFunction([10,9,8,7,6,5,4,3,2,1],5)); //[6,1]
// console.log(myFunction([7,2,1,6,3,4,5,8,9,10],2)); //[2,6,4,8,10]