// ### Step Six

// **Filter The List Based On User Input**

// Write a function called search(), which will trigger based on the event listener you created in the last step. This function will return a list called results. This function will filter the fruit list based on whatever user input is in the search box. **If the string in the user input appears ANYWHERE in the fruit name, it should be added to results list. It also should not matter if a user types upper or lower case letters.** That means that if a user types “ap” both “Apple” and “Grape” will appear in the results list.

// const fruits = [
//   "Apple",
//   "Apricot",
//   "Avocado 🥑",
//   "Banana",
//   "Bilberry",
//   "Blackberry",
//   "Blackcurrant",
//   "Blueberry",
//   "Boysenberry",
//   "Currant",
//   "Cherry",
//   "Coconut",
//   "Cranberry",
//   "Cucumber",
//   "Custard apple",
//   "Damson",
//   "Date",
//   "Dragonfruit",
//   "Durian",
//   "Elderberry",
//   "Feijoa",
//   "Fig",
//   "Gooseberry",
//   "Grape",
//   "Raisin",
//   "Grapefruit",
//   "Guava",
//   "Honeyberry",
//   "Huckleberry",
//   "Jabuticaba",
//   "Jackfruit",
//   "Jambul",
//   "Juniper berry",
//   "Kiwifruit",
//   "Kumquat",
//   "Lemon",
//   "Lime",
//   "Loquat",
//   "Longan",
//   "Lychee",
//   "Mango",
//   "Mangosteen",
//   "Marionberry",
//   "Melon",
//   "Cantaloupe",
//   "Honeydew",
//   "Watermelon",
//   "Miracle fruit",
//   "Mulberry",
//   "Nectarine",
//   "Nance",
//   "Olive",
//   "Orange",
//   "Clementine",
//   "Mandarine",
//   "Tangerine",
//   "Papaya",
//   "Passionfruit",
//   "Peach",
//   "Pear",
//   "Persimmon",
//   "Plantain",
//   "Plum",
//   "Pineapple",
//   "Pomegranate",
//   "Pomelo",
//   "Quince",
//   "Raspberry",
//   "Salmonberry",
//   "Rambutan",
//   "Redcurrant",
//   "Salak",
//   "Satsuma",
//   "Soursop",
//   "Star fruit",
//   "Strawberry",
//   "Tamarillo",
//   "Tamarind",
//   "Yuzu",
// ];

// const filterResults = (fruits, userInput) => {
//   return fruits.reduce((accu, next) => {
//     if (next.includes(userInput)) {
//       accu.push(next);
//     }
//     return accu;
//   }, []);
// };

// filterResults(fruits, "P");
//============================
//Part 1
// class Vehicle {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   honk() {
//     console.log("Beep");
//   }

//   toString() {
//     console.log(
//       `The vehicle is a ${this.make} ${this.model} from ${this.year}`
//     );
//   }
// }

// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.honk(); // "Beep."

// let myFirstVan = new Vehicle("VW", "Westfalia T3", 1983);

// // let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// // myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."

// //Part2

// class Car extends Vehicle {
//   constructor(make, model, year) {
//     super(make, model, year);
//     this.numWheels = 4;
//   }
// }

// let myFirstCar = new Car("Toyota", "Corolla", 2005, 4);
// myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
// myFirstCar.honk(); // "Beep."
// myFirstCar.numWheels; // 4

// //Part3

// class Motorcycle extends Car {
//   constructor(make, model, year) {
//     super(make, model, year);
//     this.numWheels = 2;
//   }
//   revEngine() {
//     console.log("VROOM!!!");
//   }
// }

// let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

// myFirstMotorcycle.toString();
// // "The vehicle is a Honda Nighthawk from 2000."

// myFirstMotorcycle.honk(); // "Beep."
// myFirstMotorcycle.revEngine(); // "VROOM!!!"
// myFirstMotorcycle.numWheels; // 2

// //Part4

// class Garage {
//   constructor(spots) {
//     this.vehicles = [];
//     this.spots = spots;
//     this.numberOfVehicules = 0;
//   }

//   add(newVehicle) {
//     if (!(newVehicle instanceof Vehicle)) {
//       return console.log("Only vehicles are allowed in here!");
//     }
//     if (this.vehicles.length >= this.spots) {
//       return console.log("Sorry, we're full.");
//     } else {
//       this.vehicles.push(newVehicle);
//       this.numberOfVehicules++;
//       return console.log("Vehicle added!");
//     }
//   }
// }

// let garage = new Garage(3);

// let myGarage = new Garage(3);
// let myNewGarage = new Garage(4);
// // garage.vehicles; // []
// // garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
// garage.vehicles; // [Car]
// // garage.add("Taco"); // "Only vehicles are allowed in here!"

// // garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// // "Vehicle added!"
// garage.vehicles; // [Car, Motorcycle]

// // garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// // "Sorry, we're full."

// function greeting(obj) {
//   obj.logMessage = function () {
//     console.log(`${this.name} is ${this.age} years old!`);
//   };
// }

// const tom = {
//   name: "Tom",
//   age: 7,
// };

// const jerry = {
//   name: "jerry",
//   age: 3,
// };

// greeting(tom);
// greeting(jerry);

// tom.logMessage();
// jerry.logMessage();
