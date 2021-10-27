let arr1 = ["zehan", "aditya", "anujkumar", "arya",;"vasant","vivek"];
function longestStr(aar1){
let result = '';
for(let i = 0; i< arr1.length; i++){
if(result.length < arr1[i].length ){
result = arr1[i]
}
}
return result;
}
longestStr(arr1);
