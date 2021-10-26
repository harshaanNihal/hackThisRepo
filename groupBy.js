// Method to group an array of objects based on some particular key value

// Sample data array of objects to group
let array = [
  { name: "Name 1", value: 15 },
  { name: "Name 1", value: 30 },
  { name: "Name 2", value: 45 },
  { name: "Name 2", value: 70 }
]

// Method to group the data 
const groupBy = function (data, key) {
  return data.reduce(function (carry, el) {
      var group = el[key];

      if (carry[group] === undefined) {
          carry[group] = []
      }

      carry[group].push(el)
      return carry
  }, {})
}

// Prints data in grouped format
console.log( groupBy(array, 'name') )

// Result format to be printed
/*
{
 "Name 1" : [
     { name: "Name 1", value: 15 },
     { name: "Name 1", value: 30 },
 ],
 "Name 2" : [
     { name: "Name 2", value: 45 },
     { name: "Name 2", value: 70 }
 ],
}
*/