function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
  
  // Example usage
  let unsortedArray = [64, 25, 12, 22, 11];
  let sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray);