Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
   - parameter(optional): separator(comma,slash,plus,or any symbol) if nothing is passed the array elements are seperated with a comma ",", if it is empty string all elements are joined without any characters in between them. 

   - returns: string  and if length is 0, empty string is returned.

   - note: if an elements is undefined, null or an empty array [], it is converted to an empty string.
  ```js
  let a = ['vivek','satish','pankaj'];
  a.join();//'vivek,satish,pankaj'
  a.join(',,,')//'vivek,,,satish,,,pankaj'
  a.join(NaN)//'vivekNaNsatishNaNpankah'
  a.join(545)//'vivek545satish545pankah'
  a.join("")//viveksatishpankah
  console.log(a)//['vivek', 'satish', 'pankaj']
   ``` 
- `join` can take separator anything passed is taken as string and concatenate between each element to give all elements as single string.

- no it does not mutate the original array
   
3. `flat`
   - parameter:depth(optional)
   - return: a new array with the sub-array elements concatenated into it.
   ```js
   const arr = [1, 2, [3, 4]];
   arr.flat(Infinity);
   ```
   - `flat` it takes the integer or Infinty value and concatenate all the elements till passed sub-array in to new array
   - no, it does not mutate.

4. `push` 
   - parameter: number,string, or any value. can  take multiple values
   - return: new array with all new values as its elements
   ```js
   let classRooms = [1,2,3];
   classRooms.push(4);
   classRooms.push(5,6,['a','b','c']);

   ```
   - `push` takes any value and add it at last of arr. 
   - Yes, it mutates the array.
5. `indexOf`
   - parameter: value to search in the array.
   - parameter: (optional)index from where to start,if not given it consider it as ;
   
   - return:the index of element if found and -1 if not found.
   ```js
   let arr=[4,58,7,6];
   arr.indexOf(58)//1
   arr.indexOf(5)//-1
   ```
   - `indexOf` takes any value to search inside array and return index of it if found if not returns -1.
   - no, it does't mutate.
6. `lastIndexOf`
   - parameter: value to search in the array.
   - parameter: (optional)index from where to start,if not given it consider it as ;
   
   - return:the last index of element if found two or more times and -1 if not found.
   ```js
   let arr=[4,58,7,6,58];
   arr.lastIndexOf(58)//4
   arr.lastIndexOf(5)//-1
   ```
   - `lastIndexOf` takes any value to search inside array and return last index of it if found two or more times if not returns -1.
   - no, it does't mutate.
7. `includes`
   - parameter:the value to search for.
   - parameter:the index from where to start searching
   - return: true or false
   ```js
   [1, 2, 3].includes(2)         // true
   let num=[1,2,44,4,585,7]
   num.includes(5)//false
   ```
   - `includes` takes value to search and returns true if found else return false
   - it does't mutate the array.
8. `reverse`
   - parameter: no parameter
   - return: the reversed array
   ```js
   let arr=[1,2,3]
   arr.reverse()
   ```
   - `reverse` it takes noting simply reverse the array 
   - yes,it mutates the array 
9. `every`
   - parameter: callback function -a function to test for each elements taking three arguments.
   - parameter: index(optional)
   - parameter: array(optional)
   - parameter: element
   - return:true if cb returns truthy value for every element else false.
   ```js
   function isDivByFive(element){
      return element%5==0;
   }
   [5,40,80,65].every(isDivByFive);
   ```
   - `every`takes cb and passed element, index, arr as argument to cb and if cd returns truthy for all elements it returns true else false.
   - it does not mutate the array
10. `shift`
   - parameter: takes  nothing
   - retrun: new array with index 0 element removed
   ```js
   let classRooms = [1,2,3];
   classRooms.shift();//[2,3]
   ```
   - `shift` removes zeroeth index element from array
   - Yes, it mutates the array.
11. `splice`
    - parameter: index to start.
    - parameter: deleteCount -integer how many values to remove.
    - parameter: elements to add to array.if not given splice onl removes elements from array.
   - return: an array
   ```js 
   let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
   let removed = myFish.splice(2, 2,"green")
   ```
   - `splice` takes index to start no of values to be deleted and elements to add and returns a new array

12. `find`
    - parameter : callback function 
         - parameter : element
         - parameter : index(optional)
         - parameter : array(optional)
    - return: The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
    ```js
    console.log([4, 5, 9, 12].find(a => a%2===0))
    ```
    - `find` takes callback function in which we can pass three values  element, index,arr and if searched item is found in array the first found item will returned.

13. `unshift`
   - parameter: takes  elements to add at first index
   - retrun: new array with new element added at index 0
   ```js
   let classRooms = [1,2,3];
   classRooms.unshift(0);//[0,1,2,3]
   ```
   - `unshift` adds elements at zeroeth index
   - Yes, it mutates the array.
   - 
14. `findIndex`
    - parameter : callback function 
         - parameter : element
         - parameter : index(optional)
         - parameter : array(optional)
    - return: The index of the first element in the array that passes the test. Otherwise, -1.
    - Note: if the index of the first element in the array that passes the test is 0, the return value of findIndex will be interpreted as Falsy in conditional statements.
   ```js
   function isPrime(num) {
    for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
     }
    }
    return num > 1;
   }

   console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
   console.log([4, 6, 7, 9, 12].findIndex(isPrime))
   ```
   - `findIndex` The findIndex() method executes the callbackFn function once for every index in the array until it finds the one where callbackFn returns a truthy value.
   - 
15. `filter`
    - parameter : callback function 
         - parameter : element
         - parameter : index(optional)
         - parameter : array(optional)
    - return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
    ```js
    function isBigEnough(value) {
        return value >= 10
      }
    let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
    ```
   - `filter` it takes function and returns new array with the elements that pass the test

16. `flat`
    - parameter : interger(optional) - depth level defaults to 1.
    - return: a new array with the sub-array elements concatenated into it.
    ```js 
    [1,2,[3,4]].flat(); //[1, 2, 3, 4]
    [1,2,[3,4,[5,6]]].flat(Infinity); 
    ```
   - `flat` it takes the integer or Infinty value and concatenate all the elements till passed sub-array in to new array
   - no, it does not mutate.

17. `forEach`
     - parameter : callback function 
         - parameter : element
         - parameter : index(optional)
         - parameter : array(optional)
    - return undefined
    - 
    ```js
      [1,2,3,4].forEach(a => a*2);
    ``` 
    - `forEach` takes three aurguments cb, index, arr,and returns undefined.
    - no it does not mutates the array.
18. `map`
    - parameter : callback function 
         - parameter : element
         - parameter : index(optional)
         - parameter : array(optional)
    - return a new array with each element being the result of the callback function.
    - note: it should always return value if not returned it stores undefined.
    ```js
      [1,2,3,4].map(a => a*2);
    ``` 
    - `map` takes three aurguments cb, index, arr,and returns same length of array with resulted from cb.
    - no it does not mutates the array.
19. `pop`
    - parameter: no parameter
    - return : the removed element from the array. undefined if the array is empty.

   ```js
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
    var popped = myFish.pop();   
   ```
   - `pop` takes no arguments and returns the removed element
   - it mutates the array.
20. `reduce`
    - parameter : a callback function -takes four values
                 - previousValue (the value resulting from the previous call to callbackfn)
                 - currentValue (the value of the current element)
                 - currentIndex Optional
                 - array (the array to traverse) Optional
   
    - parameter: initial value
    - return: the value that results from running the reducer callback function to complete over the entire array.
    - note: throws error if initial value is not provided.
    ```js
    [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue,      currentIndex, array) {
    return previousValue + currentValue
    })
    ```
    - `reducer` it takes four values accumulator,current value, index, array and initial value, and plays with values and return the final value.

21. `slice`
    - parameter : index to start (if negative it starts from end)
    - parameter: index to end
    - return: a new array
    ```js
    let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
    let newCar = myCar.slice(0, 2)
    ```
    - `slice` takes index to start and index to end slice and returns a new array

22. `some`
   - parameter: callback function , a function to test for each  elements taking three arguments.
   - parameter: index(optional)
   - parameter: array(optional)
   - parameter: element
   - return:true if any elements returns truthy value
   ```js
   function isDivByFive(element){
      return element%5==0;
   }
   [5,40,8,65].some(isDivByFive);
   ```
   - `some`takes cb and passed element, index, arr as argument to cb and if cd returns truthy if for any elements it returns true else false.
   - it does not mutate the array