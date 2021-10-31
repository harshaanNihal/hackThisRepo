const unique = arr => arr.filter((v,i,a)=>a.indexOf(v) == i); 

//OR

const data = [1, 2, 3, 1, 2, 4]
const uniqueValues = [... new Set(data)]; 
