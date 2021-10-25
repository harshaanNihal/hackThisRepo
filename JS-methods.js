1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

```js



let userName = 'Zehan Khan';
userName.toUpperCase(); //"ZEHAN KHAN"
let sentance = 'A quick brown fox jumped over a lazy dog';
sentance.toUpperCase(); //"A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
let houseName = 'Starks';
houseName.toUpperCase(); //"STARK"
```
`toUpperCase` doesn't accept a parameter and return the character into a uppercase


3. `toLowerCase`

```js



let lastName = 'KHAN'
lastName.toLowerCase(); //"khan"
let words = 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG';
words.toLowerCase(); //"a quick brown fox jumped over a lazy dog"
let houseName = 'STARKS';
houseName.toLowerCase(); //"starks"
```

4. `trim`

```js





let title = "     Hello World     ";
title.trim(); //"Hello World"
let 
```
`trim` does't accept a parameter and return the character with removed whitespace from start and end

5. `trimEnd`
```js
let title = "     Hello World      ";
title.trimEnd(); //"    Hello World"

```
`trimEnd` does't accept a parameter and return the character with removed whitespace from end

6. `trimStart`
```js




let title = "     Hello World      ";
title.trimStart(); //"Hello World    "

```
`trimEnd` does't accept a parameter and return the character with removed whitespace start

7. `concat`

```js
let letter1 = "Hello"
let letter2 = "World"
letter1.concat(letter2); //"HelloWorld"
letter1.concat(' ',letter2); //"Hello World"

```
