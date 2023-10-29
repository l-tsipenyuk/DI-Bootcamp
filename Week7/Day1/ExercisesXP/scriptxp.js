// Exercise 1 : Location
// Instructions
// Analyze the code below.What will be the output ?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const { name, location: { country, city, coordinates: [lat, lng] } } = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// The output will be "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude (-123.1207)."

// Exercise 2: Display Student Info
// Instructions
// Using the code given, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

// function displayStudentInfo(objUser) {
//     const {first, last} = objUser;
//     console.log(`Your full name is ${first} ${last}.`);
// }

// displayStudentInfo({ first: 'Elie', last: 'Schoppik' });

//  Exercise 3: User & Id
// Instructions
// 3.1. Using the object given and methods taught in class, turn the users object into an array:
// Excepted output: [['user1', 18273], ['user2', 92833], ['user3', 90315]]
// FYI: The number is their ID number.

// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const myArr = Object.entries(users);
// console.log(myArr);

// 3.2. Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [['user1', 36546], ['user2', 185666], ['user3', 180630]]

// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const myArr = Object.entries(users);

// myArr.forEach((user) => {
//     user[1] = user[1] * 2;
// });

// console.log(myArr);

// Exercise 4 : Person Class
// Instructions
// Analyze the code below.What will be the output ?

//     class Person {
//         constructor(name) {
//             this.name = name;
//         }
//     }

// const member = new Person('John');
// console.log(typeof member);

// Object because member belongs to a class Person

// Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// };

// Analyze the options below.Which constructor will successfully extend the Dog class?

// // 1
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.size = size;
//     }
// };

// // 2
// class Labrador extends Dog {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
// };

// // 3
// class Labrador extends Dog {
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
// };

// // 4
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// };

// Correct answer: option 2. As Labrador is a child class it has to call super(name) to refer to constructor(name)
// declared in the parent class Dog.

// Exercise 6 : Challenges
// 6.1. Evaluate these(ie True or False)

// [2] === [2]
// { } === {}

// console.log([2] === [2]);
// console.log({} === {});

// console.log(2 === 2);

// These 2 iputs are false because 2 different arrays and 2 different objects have different place in memory (regardless of content inside).
// If we had two equal numbers (outside of an object or array) it'd be true.

// 6.2. What is, for each object below, the value of the property number and why ?

// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5 };

// object1.number = 4;
// console.log(object2.number) // 4 because object1 was modified 
// console.log(object3.number) // again 4 because it refers to object2
// console.log(object4.number) // 5 because number is set to be 5

// 6.3. Create a class Animal with the attributes name, type and color.The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
};

// const animal1 = new Animal("Dori", "fish", "blue");
// console.log(animal1);

// 6.4. Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound().This method takes a parameter: the sound the animal makes, and returns the details of the animal(name, type and color) as well as the sound it makes.

class Mamal extends Animal {
    constructor(name, type, color, sound) {
        super(name, type, color);
        this.sound = sound;
    }
    noise() {
        console.log(`This is a ${this.type} called ${this.name} with a color of ${this.color}. It makes this sound: ${this.sound}.`)
    }
}

// let animal2 = new Mamal("Wolt", "dog", "white", "woof");
// animal2.noise();

// 6.5. Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

// let farmerCow = {
//     name: "Lily",
//     type: "cow",
//     color: "brown and white",
//     sound: "mooo",
// }
// var arr = Object.values(farmerCow);
// let animal3 = new Mamal(arr[0],arr[1],arr[2],arr[3]);

// or:

// let animal4 = new Mamal();
// Object.values(farmerCow).forEach((value, index) => {
//     index === 0 ? (animal4.name = value) :
//         index === 1 ? (animal4.type = value) :
//             index === 2 ? (animal4.color = value) :
//                 animal4.sound = value;
// });

// animal4.noise();