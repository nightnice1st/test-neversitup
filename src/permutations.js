// Permutations
function permutations(str) {
    const results = [];

    function permute(arr, memo = '') {
        if (arr.length === 0) {
            results.push(memo);
        } else {
            for (let i = 0; i < arr.length; i++) {
                const current = arr.slice();
                const next = current.splice(i, 1);
                permute(current, memo + next);
            }
        }
    }

    permute(str.split(''));
    return results;
}

// console.log(permutations('ab')); // Output: ['ab', 'ba']
// console.log(permutations('abc')); // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

module.exports = { permutations };