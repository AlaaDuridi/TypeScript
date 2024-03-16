"use strict";
function greet(name) {
    if (name)
        console.log(`Hello ${name.toLocaleUpperCase()}`);
    else
        console.log("Hello Guest");
}
greet(null);
greet(undefined);
greet('Alaa');
//# sourceMappingURL=nullableValues.js.map