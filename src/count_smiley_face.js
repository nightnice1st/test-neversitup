// Count the smiley faces!
function countSmileys(arr) {
    const smileyPattern = /^[:;][-~]?[)D]$/;

    return arr.filter(face => smileyPattern.test(face)).length;
}

// console.log(countSmileys([':)', ';(', ';}', ':-D'])); // Output: 2
// console.log(countSmileys([';D', ':-(', ':-)', ';~)'])); // Output: 3
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // Output: 1

module.exports = { countSmileys };