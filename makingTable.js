function fun(size) {
  var finalArr = [];
  let subArr =[];
  for(let i =1; i<=size; i++){
     for(let j =1; j<=size; j++){
        subArr.push(i*j);
     }
     finalArr.push([...subArr]);
     subArr.length = 0;
     }
  return finalArr;
}
