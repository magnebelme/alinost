class People {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const Steve = new People("Steve");
console.log(Steve.greet()); // Output: Hello, my name is Steve
