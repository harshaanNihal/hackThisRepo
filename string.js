let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(array){
  return[...array].sort((a,b) => a.length - b.length).pop();
}

// - Convert the above array "words" into an array of length of word instead of word.

let wordLength = words.map((word) =>  word.length)

// - Create a new array that only contains word with atleast one vowel.

let vowelWords = words.filter((vowel) => {
  if (
      vowel.toLowerCase().includes("a")||
      vowel.toLowerCase().includes("e")||
      vowel.toLowerCase().includes("i")||
      vowel.toLowerCase().includes("o")||
      vowel.toLowerCase().includes("u")
     ){
        return true
       }
  else{
        return false
      }
}
);

//* *  Refactor

let vowels = ['a','e','u','i','o','A','E','I','O','U'] ;
let vowelName = words.filter(obj => obj.split('').some(letter=> vowels.includes(letter)))

// - Find the index of the word "rhythm"

let rhythmIndex = words.findIndex((word) => word === "rhythm" );

// - Create a new array that contians words not starting with vowel.

let isNotVowel = words.filter((vowel) => {
  if (
      vowel.toLowerCase().includes("a")||
      vowel.toLowerCase().includes("e")||
      vowel.toLowerCase().includes("i")||
      vowel.toLowerCase().includes("o")||
      vowel.toLowerCase().includes("u")
     ){
        return false
       }
  else{
        return true
      }
}
);

// - Create a new array that contianse words not ending with vowel

let isEndVowel = words.filter((vowel) => {
  if (
      vowel.toLowerCase().lastIndexOf("a", words.length -1)||
      vowel.toLowerCase().lastIndexOf("e", words.length -1)||
      vowel.toLowerCase().lastIndexOf("i", words.length -1)||
      vowel.toLowerCase().lastIndexOf("o", words.length -1)||
      vowel.toLowerCase().lastIndexOf("u", words.length -1)
     ){
        return true
       }
  else{
        return false
      }
}
);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers


let sumArray = numbers.reduce((acc,num) => {
  return acc + num ;
} , 0)

let sum = 0; 

let sumArray = numbers.forEach((num) =>{
  sum = sum + num
})


// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let multipliedByThree = numbers.filter((num) => {
    if ( num % 3 === 0 ){
      return true
    }
    else {
      return false
    }
})

// - Create a new array that contains only even numbers

let evenNumbers = numbers.filter((num) => {
  if ( num % 2 === 0 ){
    return true 
  } 
  else {
    return false
  }
})

// - Create  a new array that contains only odd numbers.

let oddNumbers = numbers.filter((num) => {
  if ( num % 2 != 0 ){
    return true 
  }
  else {
    return false
  }
} )

// - Create a new array that should have true for even number and false for odd numbers.
TODO:
let isEvenTrueOddFalse = numbers.map((num) => {
  if ( num % 2 === 0 ){
    return true
  }
  else {
    return false
  }
} )

//* Refactor */
let isEvenTrueOddFalse = numbers.map((num) => num % 2 === 0 )

// - Sort the above number in assending order.

numbers.sort((a,b)=> a - b );

TODO:
// - Does sort mutate the original array?

//!'Yes'

// - Find the sum of the numbers in the array.

let sumOfNumber = numbers.reduce((acc,num) => acc + num ,0);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(array){
  let sum = 0;
  let avg;
  for ( let  i = 0  ; i < array.length ; i++ ){
    sum = sum + array[i];
    avg = sum / array.length
  }
  return avg
}


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(array){
  let sum = 0;
  let avg
  for (let i = 0 ; i < array.length ; i++ ){
    sum = sum + array[i].length ;
     
}
    avg = sum / array.length;
     return avg
  }
 
