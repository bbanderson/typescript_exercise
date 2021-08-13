type SayHi = (name: string) => void;

interface ISayHi {
  (name: string): void;
}

type CityList = string[];

interface ICityList {
  [index: string]: string;
}

interface A {
  foo: string;
}
interface A {
  bar: number;
}

let baz: A;
