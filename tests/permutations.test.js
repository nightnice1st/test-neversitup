const { permutations } = require('permutations');

test('permutations of "ab" should return ["ab", "ba"]', () => {
    expect(permutations('ab')).toEqual(['ab', 'ba']);
});

test('permutations of "abc" should return ["abc", "acb", "bac", "bca", "cab", "cba"]', () => {
    const result = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    expect(permutations('abc')).toEqual(result);
});
