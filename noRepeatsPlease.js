function permAlone(str) {
  
  //the string needs to be split up into individual letters in order to analyse it
var arr=str.split('');
  //we will use the result place holder to count repeating letters
var result = 0;  
  
  //we need to create a function that will start swapping the letters in the string into all their possible combinations
  function swap(a,b){
    var temp = arr[a];
    //swap a and b. temp holds the values during the swap
    arr[a] = arr[b];
    arr[b] = temp;
  }
  
  function generate(x){
  
  //regular expression checking for any letter consecutive repeats
  var regex = /([a-z])\1+/g;
  //if there is only one of a character (x) AND the string's array fails the regex test, join the letters of the array back together  
    if (x === 1 && !regex.test(arr.join(''))){
    //add the string without repeats to result counting the number of possible swiaps w/o repeats
    result ++;
    } else {
      //the previous expression was for an array with no repeats to begin with, if that was not the case we need to start swapping the letters to create new combinations
      for (var i=0; i !== x; i++){
        //move to the next letter in the array and swap and check it/swap it
        generate(x - 1);
        //Read about Heap's algorithm if this doesn't make sense later...his algorithm swaps 2 items at a time, while x-2 (all other values) items are unchanged. This function will go along the array until i = x (the number of characters in the array in this case). The alorithm generates (x-1)! permutations, creating every possible connection that ends with the last character. Then, if x is an odd number, the first and the last characters are switched, if x is even x will be switched with i. Then 1 is added to the i counter and repeated. Each iteration will create all premutations of the last character that i has just moved past until i ends on the last position. x % 2 ? will return 0 if x is an off number, otherwise i will be used. If x % 2 is even, it will return a falsey value, and therefore goes to i, on the right of the colon.
        swap(x % 2 ? 0 : i, x - 1);
      }
    }
  }
  generate (arr.length);
  return result;
}

// Test here.
permAlone('aab');