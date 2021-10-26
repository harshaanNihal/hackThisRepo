let penguin = {name:"Whiteblack",
              origin:"Whiteblack the Penguin Sees the World",
              author:"H. A. Rey and Margret Rey",
              description:"Children's book about a travelling penguin"
            };

penguin.sayHello = function () {
  console.log(`Hello, I am a penguin and my name is ${penguin.name}`);
}

penguin.canFly=false;

penguin.chirp = function() {
  console.log("CHIRP CHIRP! Is this the way penguins sound like?");
}

penguin.name = "Penguin McPenguinFace";

penguin.fly =function () {
  if(penguin.canFly){
    console.log("I can fly!");
  }else{
    console.log("No flying for me!");
  }
}

penguin.canFly = true;

for(let i in penguin){
  console.log(i);
}

// 1. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.

penguin.favoriteFood = ["fish","seal","birds"]

// 2. Access your penguin's second favorite food and print it to the console using console.log()

console.log(penguin.favoriteFood[1]);

// 3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.

var firstFavFood = penguin.favoriteFood[0];

// 4. Add another food to the end of the list.

penguin.favoriteFood.push("plankton");

// 5. Print the length of your penguin's favoriteFoods array to the console with console.log()

console.log(penguin.favoriteFood.length);

// 6. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).

penguin.favoriteFood[penguin.favoriteFood.length-1] = 'pineapples';
console.log(penguin);


// 7. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list.

var lastFood = penguin.favoriteFood[penguin.favoriteFood.length-1]

//8. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)

for(i of penguin.favoriteFood){
  console.log(i);
}

// 1. Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value! (I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and flip-flops, because wouldn't that be ridiculous?)

var outfit = {hat:"baseball cap",shirt:"Hawaiian shirt",pant:"cargo shorts",shoes:"flip-flops"}
penguin.outfit=outfit;

// 2. Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.

var penguinHatType = penguin.outfit.hat;
console.log(`Penguin McPenguinFace is wearing ${penguinHatType}`);


// 3. Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch" -- because penguins are classy like that!

penguin.outfit.accessory = "pocket watch";

// 4. Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value. (Again, because penguins are classy!)

penguin.outfit.hat = "top hat";

// 5. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property. (Hint: see this page on the delete operator for examples.)

delete penguin.outfit.pant;

// 6. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console. (Hint: This is the same as step 31 from above, only now we're accessing values from a nested object!)

function outfitItems() {
  for(item in penguin.outfit){
    console.log(penguin.outfit[item]);
  }
}


// Exercise 2
// 14.
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa


var favRecipe = {name:"maggi",serves:1,ingredients:["maggi","water"]};
for( i in favRecipe){
  console.log(`${i}: ${favRecipe[i]}`);
}

// 15.
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


let books = [{name:"The Alchemist",author:"Paulho Coelho",alreadyRead:true},{name:"Crime And Punishment",author:"Fyodor Dostoyevsky",alreadyRead:true},
{name:"War And Peace",author:"Leo Tolstoy",alreadyRead:false}]

for(var i=0;i<books.length;i++){
(books[i].alreadyRead)?console.log(`You already read ${books[i].name} by ${books[i].author}`):console.log(`You still need to read ${books[i].name} by ${books[i].author}`);
}


// Value of x, y, a, b

// var x = 10;             //x=10
// var y = 'abc';          //y='abc'
// var a = x;              //a=10
// var b = y;              //b='abc'


// Value of x, y, a, b

// var x = 10;             //x=10
// var y = 'abc';          //y='abc'
// var a = x;              //a=5
// var b = y;              //b='def'
// a = 5;
// b = 'def';

// Value of arr & arrCopy

// var arr = [1];           //arr = [1,2]
// var arrCopy = arr;       //arrCopy=[1,2]
// arr.push(2);

// // Value of obj

// var obj = { name: 'ryan' };        obj = obj = { surname: 'florance' };
// obj = { surname: 'florance' };


// // What's the output.

// var arr = ['Hi'];
// var arr2 = arr;                    //true
// console.log(arr === arr2);


// What's the output.

// var arr1 = ['Hi!'];
// var arr2 = ['Hi!'];
// console.log(arr1 === arr2);        //false
// console.log(arr == arr2);          //error. arr is not defined

//What's the output
// console.log([10] === [10]);        //false



// What's the output?

// function personDetails(person) {
//   person.age = 25;
//   person = {
//       name: 'John',
//       age: 50
//   };
//
//   return person;
// }
// var personObj1 = {
//   name: 'Alex',
//   age: 30
// };
// var personObj2 = personDetails(personObj1);
// console.log(personObj1); // -> ?  {name:"john",age:50}
// console.log(personObj2); // -> ?  {name:"alex",age:30}

// Guess the output
// var oldArray = [];
// var object = {};
// object.newArray = oldArray;
// oldArray.push(10);
// console.log(object.newArray === oldArray);     //false



// Guess the output
// var a = 5;
// var b = a;
// a = 10;
// console.log(a);      //10
// console.log(b);      //5



// What's the output?
// var a = {};
// var b = a;
// a.a = 1;
// console.log(a);    //a = 1
// console.log(b);    //a = 1



// What's the output.

// var a = [];
// var b = a;
// a.push(1);
// console.log(a); // [1]
// console.log(b); // [1]
// console.log(a === b);    //true


//
// // Clone the object person in clone
//
// var person = {
//   name: "Mark",
//   age: 34,
//   subjects: {
//     maths: 78,
//     physics: 43
//   }
// }

// Clone the object person in clone

var person = {
  name: "john",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
}

var clone = Object.assign({},person);
/*
  Since with the Object.assign we don't really clone deep objects, we can use JSON.stringfy and JSON.parse to deep clone and modify without side effects
> a = { a: 'a', b: 'b', c: { c: 'c'} } //Creating a
  { a: 'a', b: 'b', c: { c: 'c' } }

> b = Object.assign({},a); // Clonning to b
{ a: 'a', b: 'b', c: { c: 'c' } }

> b.c.c = 'd' // Modifying a deep object on b
'd'
> a
{ a: 'a', b: 'b', c: { c: 'd' } } // It reflected on a

  Using JSON.parse / JSON.stringfy:
> a = { a: 'a', b: 'b', c: { c: 'c'} }
{ a: 'a', b: 'b', c: { c: 'c' } }
> b = JSON.parse(JSON.stringify(a))
{ a: 'a', b: 'b', c: { c: 'c' } }
> b.c.c = 'd'
'd'
> a
{ a: 'a', b: 'b', c: { c: 'c' } }
> b
{ a: 'a', b: 'b', c: { c: 'd' } }
> 
*/
var realClone = JSON.parse(JSON.stringify(person));

//For these last few challenges, I'll create three penguins for you to work with. Copy-paste this code snippet to the end of your code:

var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

var penguins = [gunter,ramon,fred]

console.log(penguins[0]);


// 3.Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.


var secondPenguin = penguins[1];


// 4 Print to the console the name of the last penguin in the list.

console.log(penguins[penguins.length-1].name);

// 5. Remember the penguin you created earlier, with the variable name of myPenguin? Add that penguin to the end of the penguins array!

var myPenguin = penguin;

penguins.push(myPenguin);


// 6. Print the length of the penguins array to the console.

console.log(penguins.length);

// 7. Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).

penguins[0].canFly = true;

// 8.Call the sayHello method of the first penguin in your penguins array!

penguins[0].sayHello();


// 9.Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.

for(penguin of penguins){
  console.log(penguin.name);
}


// 10.Write a for loop to call the sayHello method of every penguin in the array!

for(penguino in penguins){
  console.log(penguins[penguino].sayHello());
}


// 11.Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2

for(penguino in penguins){
  penguins[penguino].numberOfFeet=2;
}

// 12.Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!" -- for example, "Gunter can fly!" or "Ramón can fly!" (Don't do anything for the penguins that cannot fly.)

for(penguino in penguins){
if(penguins[penguino].canFly){
  console.log(`${penguins[penguino].name} can fly`);
}
}