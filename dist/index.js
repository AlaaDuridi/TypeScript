"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
level = "string";
function render(document) {
    console.log(document);
}
let numbers = [];
numbers[0] = 0;
numbers.forEach(n => n.valueOf());
let person = ["John", 25];
let user = [1, 'Alaa'];
console.log(user[0]);
console.log(user[1]);
user.push(1);
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
;
var Size2;
(function (Size2) {
    Size2[Size2["Small"] = 0] = "Small";
    Size2[Size2["Medium"] = 1] = "Medium";
    Size2[Size2["large"] = 2] = "large";
})(Size2 || (Size2 = {}));
;
var Size3;
(function (Size3) {
    Size3["Small"] = "S";
    Size3["Medium"] = "M";
    Size3["large"] = "L";
})(Size3 || (Size3 = {}));
;
console.log(Size.Small);
console.log(Size.Medium);
console.log(Size.large);
console.log(Size2.Small);
console.log(Size2.Medium);
console.log(Size2.large);
console.log(Size3.Small);
console.log(Size3.Medium);
console.log(Size3.large);
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map