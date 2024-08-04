// Find the odd int
function findOddInt(arr) {
    let result = 0;
    for (let num of arr) {
        result ^= num;
    }
    return result;
}

// console.log(findOddInt([7])); // Output: 7
// console.log(findOddInt([0])); // Output: 0
// console.log(findOddInt([1, 1, 2])); // Output: 2
// console.log(findOddInt([0, 1, 0, 1, 0])); // Output: 0
// console.log(findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Output: 4

module.exports = { findOddInt };