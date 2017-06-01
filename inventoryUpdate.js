
function updateInventory(arr1, arr2) {

  //Variable to put all the inventory into
  var index;
  
  //this is something new and kind of confusing, a template function/method to see if a product is available...and return undefined if it is not. "This" will apply to any given array
  
  var productIndex = function(productName){
    for(i=0; i < this.length; i++){
      if(this[i][1] === productName){
        return i;
      }
    }
    return undefined;
  };
  //go through each item in the new inventory
  for (j=0; j < arr2.length; j++){
    //use the template function, using arr1 as this, essentially checking arr2 for any of the same products
    index = productIndex.call(arr1, arr2[j][1]);
    
    //if index is undefined, meaning a product from arr2 does not exist within arr1, push the product into the index because you don't need to add it to any older inventory
    
    if (index === undefined){
      arr1.push(arr2[j]);
    } else {
      //otherwise, if a product exists in arr2 AND arr1, their inventory numbers need to be added together
      
      arr1[index][0] += arr2[j][0];
    }
    
  }
 //the inventory then needs to be sorted into alphabetical order
  
  arr1.sort(function (a, b){
    if (a[1] > b[1]){
      return 1;
    }
    if (a[2] < b[2]){
      return -1;
    }
    return 0;
    
  });
  
return arr1;
}
