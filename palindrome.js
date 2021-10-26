function isPalindrome(x) {
  x = x.toLowerCase(); 
 let res = '';
  for(let i = 0; i <  x.length; i++){
    res = x[i] + res;
  }
  if (res === x){
    return true;
  }else {
    return false;
  }
};
isPalindrome("mom");
