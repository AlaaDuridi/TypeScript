function greet(name: string|null | undefined):void{
    if(name)
    console.log(`Hello ${name.toLocaleUpperCase()}`);
else
console.log("Hello Guest");
}

greet(null);
greet(undefined);
greet('Alaa');
// // "strictNullChecks": true, 
//this option at tsconfig is enabled by default, by enabling the strict,"strict": true, 
