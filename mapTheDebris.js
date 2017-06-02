function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
var arr2=[];
  

  //so that the equation can be used more than once, a for loop is necessary
  for (var i = 0; i < arr.length; i++) {
      var result = Math.round(2 * Math.PI * Math.sqrt((Math.pow(earthRadius + arr[i].avgAlt, 3)/(GM))));
    
    arr2.push({name:arr[i].name, orbitalPeriod:result});
  }

  return arr2;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);