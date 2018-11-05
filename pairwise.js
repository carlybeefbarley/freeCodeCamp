function pairwise(arr, arg) {
//give the sum a placeholder of 0 to begin with
  var sum = 0;
  //slice the array so that numbers can be worked with individually
  var splitArr = arr.slice();
  //begin by looping through the first element of the array 
  for (var i = 0; i < splitArr.length; i++){
    //then loop starting with the second element so that the numbers can be checked against one another
    for (var j = i + 1; j < splitArr.length; j++){
      if (splitArr[i] + splitArr[j] === arg){
        sum += i + j;
        //if there are multiple of the same number, make the second NaN
        splitArr[i] = splitArr[j] = NaN;
      }
    }
    
  }
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
