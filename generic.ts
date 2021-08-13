function helloGeneric<T>(message: T): T {
  return message;
}

// console.log(helloGeneric("hi"));
// console.log(helloGeneric<string>("hi"));
// console.log(helloGeneric(10));
// console.log(helloGeneric(true));
// console.log(helloGeneric(null));
// console.log(helloGeneric(undefined));
// console.log(helloGeneric({}));

function foo<T, U, V>(a: T, b: U, c: V): T {
  return a;
}

foo<"", number, boolean>("", 1, true);

interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "john",
  age: 20,
};

type Keys = keyof IPerson;

const keys: Keys = "age";

// function getProps(obj: IPerson, key: "name" | "age"): string | number {
//   return obj[key];
// }

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProps<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
console.log(getProps(person, "name"));
console.log(getProps(person, "age"));
function setProps<T, K extends keyof T>(
  obj: T,
  key: keyof T,
  value: T[K]
): void {
  obj[key] = value;
}
setProps(person, "name", "sam");
setProps(person, "age", 2);
console.log(getProps(person, "name"));
console.log(getProps(person, "age"));
