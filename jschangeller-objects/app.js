// ************************************Javascript objects*******************************************

// 1.Accessing object properties one

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

// function myFunction(obj){
//    return obj.country;
// }
// console.log(myFunction({  continent: 'Asia',  country: 'Japan'}));   
// console.log(myFunction({  country: 'Sweden',  continent: 'Europe'}));   

// 2.Accessing object properties two

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

// function myFunction(obj){
//    return obj['prop-2'];
// }

// console.log(myFunction({  one: 1,  'prop-2': 2})); //2
// console.log(myFunction({  'prop-2': 'two',  prop: 'test'})); //'two'

// 3.Accessing object properties three

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

// function myFunction(obj, key) {
//    return obj[key]
// }
// console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'));
// console.log(myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country'));

// 4.Check if property exists in object

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise


// function myFunction(a, b) {
//    return a.hasOwnProperty(b);
// }

//author

// function myFunction(a, b) {
//    return b in a;
// }

// console.log(myFunction({a:1,b:2,c:3},'b')); //true
// console.log(myFunction({x:'a',y:'b',z:'c'},'a')); //false
// console.log(myFunction({x:'a',y:'b',z:'c'},'z')); //true


// 5.Creating Javascript objects one

// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

// function myFunction(a) {
//    return { key: a };
// }

// console.log(myFunction('a'));
// console.log(myFunction('z'));
// console.log(myFunction('b'));

// 6.Creating Javascript objects two

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

// function myFunction(a,b){
//    return {[a]:b};
// }

// console.log(myFunction('a','b'));//{a:'b'}
// console.log(myFunction('z','x'));//{z:'x'}
// console.log(myFunction('b','w'));//{b:'w'}

// // 7.Creating Javascript objects three

// // Write a function that takes two arrays (a and b) as arguments
// // Create an object that has properties with keys 'a' and corresponding values 'b'
// // Return the object

// function myFunction(a,b){
//     var result = {};
//     for (var i = 0; i < a.length; i++) {
//         result[a[i]] = b[i];
//     }
//     return result;
// }

//author

// function myFunction(a, b) {
//     return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
// }

// console.log(myFunction(['a','b','c'],[1,2,3])); //{a:1,b:2,c:3}
// console.log(myFunction(['w','x','y','z'],[10,9,5,2]));//{w:10,x:9,y:5,z:2}
// console.log(myFunction([1,'b'],['a',2]));//{1:'a',b:2}

// 8.Extract keys from Javascript object

// Write a function that takes an object (a) as argument
// Return an array with all object keys

// function myFunction(a){
//    return Object.keys(a);
// }
// console.log(myFunction({a:1,b:2,c:3})); //['a','b','c']
// console.log(myFunction({j:9,i:2,x:3,z:4})); //['j','i','x','z']
// console.log(myFunction({w:15,x:22,y:13})); //['w','x','y']

// 9.Sum object values

// Write a function that takes an object (a) as argument
// Return the sum of all object values

// function myFunction(a){
//     let value=Object.values(a);
//     return value.reduce((total,cost)=> total+cost)
// }

// console.log(myFunction({a:1,b:2,c:3})); //6
// console.log(myFunction({j:9,i:2,x:3,z:4}));//18
// console.log(myFunction({w:15,x:22,y:13}));//50

// 10.Remove a property from an object

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

// function myFunction(obj){
//     const {b,...objNew}=obj;
//     return objNew;
// }

// console.log(myFunction({ a: 1, b: 7, c: 3 }));//{ a: 1, c: 3 }
// console.log(myFunction({ b: 0, a: 7, d: 8 }));//{ a: 7, d: 8 }
// console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 }));//{ e: 6, f: 4, a: 3 }

// 11.Merge two objects with matching keys

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

// function myFunction(x,y){
//     const { b, ...newObj } = y;
//     return {...x, ...newObj, d: b}
// }
// console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));//{ a: 1, b: 2, c: 3, e: 5, d: 4}
// console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));//{ a: 5, b: 4, c: 3, e: 2, d: 1}
 

// 12.Multiply all object values by x

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

// function myFunction(a,b){
//  for(let value of Object.values(a)){
//      let result=value*b;
//     console.log(result);
// }
// return 
// }

// console.log(myFunction({a:1,b:2,c:3},3));  //{a:3,b:6,c:9}
// console.log(myFunction({j:9,i:2,x:3,z:4},10));  //{j:90,i:20,x:30,z:40}
// console.log(myFunction({w:15,x:22,y:13},6));  //{w:90,x:132,y:78}

// 13.Swap object keys and values

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// function myFunction(obj) {
//    const res = {};
//   for (let key in obj) res[obj[key]] = key;
//   return res;
// }


// 14.Replace empty strings in object with null values

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// function myFunction(obj){
//     const newObj = { ...obj };
//     for (key in newObj) {
//       if (newObj[key].trim() === "") newObj[key] = null;
//     }
//     return newObj; 
// }

// console.log(myFunction({ a: 'a', b: 'b', c: '' }));
// //{ a: 'a', b: 'b', c: null }
// console.log(myFunction({ a: '', b: 'b', c: ' ', d: 'd' }));
// //{ a: null, b: 'b', c: null, d: 'd' }
// console.log(myFunction({ a: 'a', b: 'b ', c: ' ', d: '' }));
// //{ a: 'a', b: 'b ', c: null, d: null }

// 15.Extracting information from objects

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

// function myFunction(obj){
//     return {
//         fn: obj.fn,
//         ln: obj.ln,
//         ...(obj.size && { size: `${obj.size}cm` }),
//         ...(obj.weight && { weight: `${obj.weight}kg` }),
//     };
// }

// console.log(myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));
// //{fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
// console.log(myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}));
// //{fn: 'Martin', ln: 'Harper', weight: '102kg'}
// console.log(myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
// //{fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
// console.log(myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));
// //{fn: 'Matthew', ln: 'Müller'}



// 16.Add property to each object in array

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

// function myFunction(arr,str){
//     arr.map((obj) => (obj.continent = str));
//     return arr;
// }

// console.log(myFunction([{ city: 'Tokyo', country: 'Japan' }, 
// { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
//   //[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

// console.log(myFunction([{ city: 'Stockholm', country: 'Sweden' }, 
// { city: 'Paris', country: 'France' }], 'Europe')); 
//  //[{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

// 17.Convert array to object with counter

// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

// function myFunction(a){
//     const result ={ }
//     a.forEach((x)=>{
//         result[x] = result[x]+1 || 1;
//     })
//     return result;
// }

//author

// function myFunction(a) {
//     return a.reduce((acc, cur) => {
//         return { ...acc, [cur]: (acc[cur] || 0) + 1 };
//     }, {});
// }

// console.log(myFunction([1,2,2,3]));  //{1:1,2:2,3:1}
// console.log(myFunction([9,9,9,99]));  //{9:3,99:1}
// console.log(myFunction([4,3,2,1]));  //{1:1,2:1,3:1,4:1}

