// Classes Methods and Properties
// Create Following classes and properties

// Ask: How can we call constructor parameters while they have default values?


class Hamster {
    constructor(owner = "", name, price = 15) {
        this.owner = owner;
        this.name = name;
        this.price = price;
    }
    wheelRun() {
        console.log("squeak squeak")
    }

    eatFood() {
        console.log("nibble nibble")
    }

    getPrice() {
        return this.price
    }

}

// -------------------------------------------------------

class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, /*hamsters = [],*/ bankAccount = 0) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = [];
        this.bankAccount = bankAccount;
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        return `How are you ${this.name}?`
    }

    eat() {
        this.weight += 1,
            this.mood += 1
    }
    exercise() {
        this.weight -= 1
    }
    ageUp() {
        this.age += 1,
            this.height += 1,
            this.weight += 1,
            this.mood -= 1,
            this.bankAccount += 10
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster),
            this.mood += 10,
            this.bankAccount -= hamster.getPrice()
    }
}

const hamathor = new Hamster("Harley", "Hamathor", 25)
console.log(hamathor.getPrice())

// const hammy = new Person("hammy", 10, 35, 100, 4, 5, 5)
// console.log(hammy.buyHamster(hamathor))
// Ask: Why is this object above undefined?

// -------------------------------------------------------

// Create a Story with your Person class
// Feel free to update or add methods to automate some of these tasks.

const timmy = new Person("Timmy", 5, 1, 1, 1, 0)
const gus = new Hamster("Timmy", "Gus")
for (let i = 0; i < 5; i++) {
    timmy.eat()
}
for (let i = 0; i < 5; i++) {
    timmy.exercise()
}
for (let i = 0; i < 4; i++) {
    timmy.ageUp()
}
timmy.buyHamster(gus)
console.log(timmy)
for (let i = 0; i < 6; i++) {
    timmy.ageUp()
}
console.log(timmy)
for (let i = 0; i < 2; i++) {
    timmy.eat()
}
console.log(timmy)
for (let i = 0; i < 2; i++) {
    timmy.exercise()
}
console.log(timmy)

// Make story here
console.log(`${hamathor.owner}, ${hamathor.name}, ${hamathor.price}, ${timmy.name}, ${timmy.age}, ${timmy.height}, ${timmy.weight}, ${timmy.mood}, ${timmy.bankAccount}`)
// -------------------------------------------------------
// Chef Make Dinners

class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert
    }
}

class Chef {

}

const curry = new Dinner("chicken on a stick", "steak", "chocolate cake")

  // Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
  // Have the Chef create 3 dinners, log the dinners
  // // -------------------------------------------------------