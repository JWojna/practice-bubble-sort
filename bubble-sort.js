
function bubbleSort(arr) {
  let swapped = false;
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // If the current value is greater than its neighbor to the right
    if (arr[i] > arr[i + 1]) {
      // Swap those values
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      swapped = true;
      // Do not move this console.log
      console.log(arr.join(","));
    }
  }


    // If you get to the end of the array and no swaps have occurred, return
    // Otherwise, repeat from the beginning
  if (swapped) return bubbleSort(arr);

  return arr;

}

arr = [2,4,6,8,1,3,5,7,9]
console.log(bubbleSort(arr));


module.exports = bubbleSort;
