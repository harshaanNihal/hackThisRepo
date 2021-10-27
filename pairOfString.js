function solution(str){
  var result = [];
  str = str.length % 2 ? str + '-' : str
  for(int i = 0 ; i < str.length ; i+=2) {
      result.push(str[i] + str[i+1]);
  }
  return result;
}
