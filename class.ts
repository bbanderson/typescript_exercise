// class Parent {
//   constructor(
//     public name: string,
//     protected _age: number,
//     protected _id: number
//   ) {}

//   introduce(): void {
//     console.log(`Hello, I'm ${this.name}.`);
//   }
// }

// class Child extends Parent {
//   constructor(
//     public name: string,
//     protected _age: number,
//     protected _id: number,
//     public job: string
//   ) {
//     super(name, _age, _id);
//   }
// }

// const child1 = new Child("john", 20, 1, "developer");
// console.log(child1);

class Parent {
  constructor(public name: string) {}
}

class Child extends Parent {
  constructor(public name: string, protected age: number) {
    super(name);
  }

  protected sayHi() {
    console.log(`Hi, I'm ${this.name}, ${this.age}`);
  }
}

class GrandChild extends Child {
  constructor(public name: string, public age: number) {
    super(name, age);
    this.sayHi();
  }
  sayHi() {
    console.log(`안녕하세요, 저는 ${this.name}이고 ${this.age}세에요.`);
  }
}

// const grandChild1 = new GrandChild("sam", 22);
// grandChild1.age = 20;
// grandChild1.sayHi();

abstract class AbstractAnimal {
  constructor(protected _species: string) {}

  abstract makeSound(sound: string): void;
}

class Animal extends AbstractAnimal {
  makeSound(sound: string): void {
    console.log(sound);
  }
}

const dog = new Animal("dog");
console.log(dog);
dog.makeSound("woof");
