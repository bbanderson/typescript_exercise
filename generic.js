"use strict";
function helloGeneric(message) {
    return message;
}
// console.log(helloGeneric("hi"));
// console.log(helloGeneric<string>("hi"));
// console.log(helloGeneric(10));
// console.log(helloGeneric(true));
// console.log(helloGeneric(null));
// console.log(helloGeneric(undefined));
// console.log(helloGeneric({}));
function foo(a, b, c) {
    return a;
}
foo("", 1, true);
var person = {
    name: "john",
    age: 20,
};
var keys = "age";
// function getProps(obj: IPerson, key: "name" | "age"): string | number {
//   return obj[key];
// }
// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProps(obj, key) {
    return obj[key];
}
console.log(getProps(person, "name"));
console.log(getProps(person, "age"));
function setProps(obj, key, value) {
    obj[key] = value;
}
setProps(person, "name", "sam");
setProps(person, "age", 2);
console.log(getProps(person, "name"));
console.log(getProps(person, "age"));
