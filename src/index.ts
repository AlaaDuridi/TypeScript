/**
 * Built-In Types
 */
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
 let level ;
 
 /**
  * Any Type
  */
 level = 1;
 level= "string";
 //any type can be in any type, but this is agains the whole idea of using typescript , we used typescript for type safety, for type checking,
 // so if we use the any type, we are not using the typescript as it should be used, so we should avoid using any type as much as possible

 //using any type for variable 

//  function render(document){ // compilation error: any type can be passed to the function
//     console.log(document);
//  }

//solution no 1 : using any type for variable
 function render(document: any ){ 
    console.log(document);
 }

 //solution no 2 : go to tsconfig.json  and set "noImplicitAny": false, this will  allow to use any type for variable, it will not  give compilation error
 //NOT RECOMMENDED
//  function render2(document ){ 
//     console.log(document);
//  }

/**
 * Arrays
 */

let numbers :number[] = [] ;

numbers[0] =0 ; 

//benifit of typescript: code completion
numbers.forEach(n=>n.valueOf());

/**
 * Tuples : are useful when u have two values, key and value
 * best pracroce is not to use tuples for more than two valuse
 */

let person : [string, number] = ["John", 25];

let user :[number, string] = [1,'Alaa'];
console.log(user[0]);
console.log(user[1]);
user.push(1); //no error will arise and this is one of the gaps of typescript
