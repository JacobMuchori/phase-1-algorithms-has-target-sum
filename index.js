function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i=0; i < array.length; i++){
  for (let h=i+1; h < array.length; h++){
     let rem= target-array[i]
      if (array[h]===rem) {
       return (true);
      } 
  }
  }
      return (false);
}



console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));
console.log(hasTargetSum([1, 2, 5], 4));
console.log(hasTargetSum([-7, 10, 4, 8], 3));
console.log(hasTargetSum([1, 2, 3, 4], 5));
console.log(hasTargetSum([2, 2, 3, 3], 4));
console.log(hasTargetSum([4], 5));
console.log(hasTargetSum([7, 8, 12, 3], 20));
console.log(hasTargetSum([5, 9, 6], 18));


/* 
  Write the Big O time complexity of your function here
  0(n*2)
*/

/* 
  Add your pseudocode here
  iterate through the whole array to find a suitable index with our first element
  iterate though the whole array again to identify another suitable index
  find the difference between the target and the element in our first index.
  If the element in our second index is equal to the difference:
   return true
  else if no suitable index is found return false
*/

/*
  Add written explanation of your solution here
  The function iterates through the array twice trying to identify two suitable indexes whose 
  elements when added equal our target. If the function manages to find the first element, it
  should subtract the element from the index to get our remainder.Th second index should have
  an element that equals our remainder.If that is achieved, the function returns true.However
  if the function iterates through our array and fails to find a suitable index with the 
  remainder, it should return false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([7, 8, 12, 3], 20));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");


  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5, 9, 6], 18));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
