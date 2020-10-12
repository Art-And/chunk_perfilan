// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples

// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const selectArray = [1, 2, 3, 4, 5, 6];
const division = 2;

const chunk = (originArray, div) => {
  let finishDivArray = [];
  for (let i = 0; i < originArray.length; i += div) {
    const remainingArray = originArray.slice(i, i + div);
    finishDivArray.push(remainingArray);
  }
  console.log('Your array division is: ', finishDivArray);
};

chunk(selectArray, division);
