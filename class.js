"use strict";
// class Parent {
//   constructor(
//     public name: string,
//     protected _age: number,
//     protected _id: number
//   ) {}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.name = name;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Child.prototype.sayHi = function () {
        console.log("Hi, I'm " + this.name + ", " + this.age);
    };
    return Child;
}(Parent));
var GrandChild = /** @class */ (function (_super) {
    __extends(GrandChild, _super);
    function GrandChild(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.sayHi();
        return _this;
    }
    GrandChild.prototype.sayHi = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694, \uC800\uB294 " + this.name + "\uC774\uACE0 " + this.age + "\uC138\uC5D0\uC694.");
    };
    return GrandChild;
}(Child));
// const grandChild1 = new GrandChild("sam", 22);
// grandChild1.age = 20;
// grandChild1.sayHi();
var AbstractAnimal = /** @class */ (function () {
    function AbstractAnimal(_species) {
        this._species = _species;
    }
    return AbstractAnimal;
}());
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animal.prototype.makeSound = function (sound) {
        console.log(sound);
    };
    return Animal;
}(AbstractAnimal));
var dog = new Animal("dog");
console.log(dog);
dog.makeSound("woof");
